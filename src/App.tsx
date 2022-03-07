import React from 'react';
 import 'antd/dist/antd.css';
import './App.css'; 
import Navbar from "./components/navbar/Navbar"
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/FooterLayout';
import Userlogin from './components/userLogin/Userlogin';
import UserRegistration from './components/userRegistration/UserRegistration';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './components/mainScreen/MainScreen';

function App() {
  return (
    <>  
 
    <Routes>
      <Route path='/' element={<MainScreen/>} />
      <Route path='/login' element={<Userlogin/>} />
      <Route path='/register' element={<UserRegistration/>} />
    </Routes>
   
    </>
  );
}

export default App;
