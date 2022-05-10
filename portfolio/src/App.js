import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css' 

const App = () => {
  return (
    <div className='App'>
      <div className='bannerSlide'>

      </div>
      <div className='me'>
        <img src='/imgs/me.jpg' alt='Spencer Wood smiling'/>
      </div>
    </div>
  );
}

export default App
