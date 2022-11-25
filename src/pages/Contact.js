import React from 'react'
import Island from '../assets/island.jpg';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${Island})`}}></div>
        <div className='rightSide'>
            <h1> Contact Us </h1>

            <form id='contact-form' method='Post'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name...' type='text' />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter email...' type='email' />
                <label htmlFor='message'>Message</label>
                <textarea rows='6' name='message' required></textarea>
                <button type='submit'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contact