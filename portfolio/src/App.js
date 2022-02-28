import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='banner'>
          <h2>Spencer Wood's Portfolio</h2>
          <nav className='nav'>
            <Link to='/' className='links'>Home</Link>
            <Link to='/about' className='links'>About</Link>
            <Link to='/contact' className='links'>Contact</Link>
          </nav>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
