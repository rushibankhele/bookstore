import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Course from '../components/course'
import list from '../assets/list.json'

function Courses() {

  console.log(list)

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course list={list} />
    </div>  
    <Footer/>
    </>
  )
}

export default Courses