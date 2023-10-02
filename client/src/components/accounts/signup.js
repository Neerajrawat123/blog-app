/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { TextField, Button, Typography } from '@mui/material';

const Container = styled(Box)`
  width: 480px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
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

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
  };

  
  const imageURL =
    'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  return (
    <Container>
      <Box>
        <Image src={imageURL} />

        <Wrapper>
          <TextField
            id='standard-basic'
            label='username'
            variant='standard'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id='standard-basic'
            label='userid'
            variant='standard'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='standard-basic'
            label='password'
            variant='standard'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginButton
            variant='contained'
            type='submit'
            onClick={(e) => handleSignup(e)}
          >
            SignUp
          </LoginButton>
          <Typography style={{ textAlign: 'center' }} variant='h6'>
            {' '}
            Or
          </Typography>
          <SignUpButton variant='outlined' onClick={(e) => navigate('/login')}>
            Have a account?
          </SignUpButton>
        </Wrapper>
      </Box>
    </Container>
  );
}

export default SignUp;
