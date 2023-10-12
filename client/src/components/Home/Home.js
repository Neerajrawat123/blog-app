import {useContext} from 'react'
import {Grid} from '@mui/material'
import { DataContext } from '../../context/dataProvider'
import Banner from '../Banner/Banner'
import Categories from './Categories'
import Posts from './post/Posts'

function Home() {
    const account = useContext(DataContext)
    console.log(account)
  return (
    <>
    <Banner />
    <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts/>
                </Grid>
            </Grid>
    </>
  )
}

export default Home