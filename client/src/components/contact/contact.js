import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom';
import { Email, Instagram } from '@mui/icons-material';

const Banner = styled(Box)`
background-image: url(http://mrtaba.ir/image/bg2.jpg);
width: 100%;
height: 50vh;
background-position: left 0px top -100px;
background-size: cover;
`

const Wrapper = styled(Box)`
padding: 20px;
& > h3, & > h5 {
    margin-top: 50px;
}`

const Text = styled(Typography)`
    color: #878787;
`;

function Contact() {
  return (
    <Box>
        <Banner />
        <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
        </Wrapper>

    </Box>
  )
}

export default Contact