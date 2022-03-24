import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage/Home';
import Request from './pages/Request/Request'
import SignIn from './pages/Login/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
  <>
  <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/sign-IN" element={<SignIn/>} />
        <Route path="/sign-UP" element={<SignUp/>} />
    </Routes>
  </Router>
  </>  
  );
}

export default App;
