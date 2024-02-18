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
import DataProvider from './context/DataProvider';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useState } from 'react';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/detail/detailView';
import Update from './components/create/update';

const ProtectedRoute = ({ isUserAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
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

              <Route
                path='/update/:id'
                element={
                  <ProtectedRoute isUserAuthenticated={isUserAuthenticated} />
                }
              >
                <Route path='/update/:id' element={<Update />} />
              </Route>

              <Route
                path='/details/:id'
                element={
                  <ProtectedRoute isUserAuthenticated={isUserAuthenticated} />
                }
              >
                <Route path='/details/:id' element={<DetailView />} />
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
