import React from 'react';
import {Routes, Route } from 'react-router-dom';
 import Login from './Components/Login';
 import Profile from './Components/Profile';

const App = () => {
  return (
   
  <div className='main'>
     <Routes>
 <Route  path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
 </Routes>
  </div>
   
 
        
      
     
  );
};

export default App;