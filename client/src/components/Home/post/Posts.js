import React, { useState ,useEffect} from 'react'
import {Box,Grid} from '@mui/material'
import Post from './Post'
import {Link,useSearchParams} from 'react-router-dom'
import { API } from '../../../services/api'
function Posts() {
    const [posts,setPosts] = useState([])
    const [searchparams] = useSearchParams()
    const category = searchparams.get('category')

    useEffect(() => {
      const fetchData = async () =>{
        const response = await API.getAllPosts({category:category || ''})

        if (response.isSuccess) {
            setPosts(response.data);
        }
    }
    
    fetchData()
}, [category])
    
  return (
<>
{
                posts?.length ? posts.map((post) => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
</>  )
}

export default Posts