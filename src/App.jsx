import React from 'react'
import Home from './home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './courses/courses';
import SignUp from './components/SignUp';
import Contact from './Contact/contact';

const App = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
    <BrowserRouter>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App