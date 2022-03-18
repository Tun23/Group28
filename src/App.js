import React from 'react';
import GlobalStyle from './globalStyles';
// import Footer from './components/Footer/Footer'
import {Navbar, Footer} from './components'
// import Services from './pages/Services/Services';
// import Products from './pages/Products/Products';
// import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ScrollToTop from './components/ScrollToTop';
// import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <ScrollToTop /> */}
      <Navbar />
      <Routes>
        {/* <Route path='/home' exact component={home} />
        {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */} */
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
