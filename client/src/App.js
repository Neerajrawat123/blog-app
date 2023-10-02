import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./components/accounts/login";
import './App.css'
import SignUp from './components/accounts/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<Login />} />
        <Route path='/sign-up' element = {<SignUp/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
