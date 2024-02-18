/** @format */

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { TextField, Button, Typography } from '@mui/material';
import { API } from '../../services/api';
import { DataContext } from '../../context/DataProvider';


const Container = styled(Box)`

  width: 480px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
  padding:10px;
`;

const Image = styled('img')({
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50 0 0 ',
});

const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  overflow: auto;
  padding: 25px 35px;
  flex-direction: column;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 30px;
    padding-left:150px;
    font-weight: 600;
`

const loginInitialValue = {
  email:'',
  password:''
}

function Login({setIsUserAuthenticated}) {
  const navigate = useNavigate();

  const [login,setLogin] = useState(loginInitialValue)

  
  const [error, setError] = useState('')

  const {setAccount} = useContext(DataContext)

  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.userLogin(login)
      if(response.isSuccess){
        setIsUserAuthenticated(true)
        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        setAccount({ name: response.data.name, username: response.data.username })
        setLogin(loginInitialValue)
        setError('')
        navigate('/')

      }
      
    } catch (error) {
      setError('something is wrong')
      
    }
  };

  const onValueChange = (e) =>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const imageURL =
    'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  return (
    <Container>
      <Box>
        <Image src={imageURL} />
        {error && <Error>{error}</Error>}


        <Wrapper>
          <TextField
            id='standard-basic'
            label='userid'
            variant='standard'
            name='email'
            onChange={(e) => onValueChange(e)}
          />
          <TextField
            id='standard-basic'
            label='password'
            variant='standard'
            name='password'
            onChange={(e) => onValueChange(e)}
          />
          <LoginButton variant='contained' onClick={(e) => handleLogin(e)}>
            Login
          </LoginButton>
          <Typography style={{ textAlign: 'center' }} variant='h6'>
            {' '}
            Or
          </Typography>
          <SignUpButton
            variant='outlined'
            onClick={(e) => navigate('/sign-up')}
          >
            Don't have a account?
          </SignUpButton>
        </Wrapper>
      </Box>
    </Container>
  );
}

export default Login;
