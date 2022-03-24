import React from 'react'
import {homeObjOne} from '../Homepage/Data'
import Navbar from '../../components/Navbar/Navbar'
import Footer from  '../../components/Footer/Footer'
import Infor from '../../components/InforSection/InforSection'

function Home()  {
  return (
    <>
    <Navbar/>
    <Infor {...homeObjOne} />
    <Footer/>
    </>
  );
}

export default Home