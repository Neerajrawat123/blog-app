import styled from '@emotion/styled'
import { AppBar,  Toolbar,  } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Component = styled(Toolbar)`
justify-content: center;
& > a {
    padding: 20px;
    color: #fff;
    text-decoration: none;
}`

function Header() {
  return (
    <AppBar>
        <Component>
            <Link to = "/">HOME</Link>
            <Link to = "/contact">CONTACT US</Link>
            <Link to = "/about">ABOUT US</Link>
            <Link to = "/account">LOGOUT</Link>
 

        </Component>
    </AppBar>
  )
}

export default Header