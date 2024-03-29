import React, { useState,useEffect, useContext } from 'react'
import {Box,styled,FormControl, InputBase,TextareaAutosize,Button} from '@mui/material'
import { AddCircle as Add } from '@mui/icons-material';
import { API } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
const Container = styled(Box)(({ theme }) => ({
  margin: '63px 100px',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}));

const Image = styled('img')({
  width: '100%',
  // marginTop:'20px',
  height: '50vh',
  objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;

   
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;
const initialPost = {
  title: '',
  description: '',
  picture: '',
  username: '',
  categories: [],
  createdDate: new Date()
}

function CreatePost() {
  const navigate = useNavigate()
  const location = useLocation()
  const {account}= useContext(DataContext)

  const [post,setPost] =useState(initialPost);
  const [file, setFile] = useState('')

useEffect(() => {
  
 post.categories = location.search?.split('=')[1] || 'All';
 post.username = account.username
}, [file])

  const savePost = async() =>{
    await API.createPost(post);
    navigate('/')
  }
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
}
  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  return (
    <Container>
      <Image src={url} alt='main'/> 
      <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>
            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
            />
    </Container>
  )
}

export default CreatePost