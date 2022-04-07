import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage/Home';
import Request from './pages/Request/Request'
import SignIn from './pages/Login/Login'
import SignUp from './pages/SignUp'
import Newfeeds from './pages/Newfeeds/Newfeeds';

function App() {
  return (
  <>
  <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/sign-IN" element={<SignIn/>} />
        <Route path="/sign-UP" element={<SignUp/>} />
        <Route path="/nf" element={<Newfeeds/>} />
    </Routes>
  </Router>
  </>  
  );
}

export default App;
