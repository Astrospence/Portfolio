import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/home'

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}