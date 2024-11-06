import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
        <h1>Contact</h1>
        <p>Feel free to reach out to us at any time.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact