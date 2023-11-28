import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <section className='Contact'>
    
    <div className='Container'>
      <div className='contactImage'>
        dfss
      </div>
      <div className='contactForm'>
      <form className='form'>
        <label className='name'>Enter your Name:</label>
        <input type='text'placeholder='Enter the name...'/>
        <label className='number'>Enter your Number:</label>
        <input type='text'placeholder='Enter the number..'/>
        <label >Enter the Message:</label>
        <input className='message' type='textbox'/>
        <button>Send</button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Contact