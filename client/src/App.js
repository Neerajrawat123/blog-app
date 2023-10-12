/** @format */

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { Box } from '@mui/material';
import Login from './components/accounts/login';
import './App.css';
import SignUp from './components/accounts/signup';
import DataProvider from './context/dataProvider';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useState } from 'react';
import CreatePost from './components/create/CreatePost';

const ProtectedRoute = ({ isUserAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  console.log(token);
  return token && isUserAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to={'/login'} />
  );
};
function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  console.log('user', isUserAuthenticated);

  return (
    <div className='App'>
      <DataProvider>
        <BrowserRouter>
          <Box style={{ marginTop: 64 }}>
            <Routes>
              <Route
                path='/login'
                element={
                  <Login setIsUserAuthenticated={setIsUserAuthenticated} />
                }
              />
              <Route
                path='/'
                element={
                  <ProtectedRoute isUserAuthenticated={isUserAuthenticated} />
                }
              >
                <Route path='/' element={<Home />} />
              </Route>
              <Route
                path='/create'
                element={
                  <ProtectedRoute isUserAuthenticated={isUserAuthenticated} />
                }
              >
                <Route path='/create' element={<CreatePost />} />
              </Route>

              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
