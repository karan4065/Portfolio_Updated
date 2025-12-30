import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';  
 
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1 />} />  
      </Routes>
    </div>
  );
};

export default App;
