import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div >
        <form className="form" action="https://formspree.io/f/mqkvbpnv" method="POST">
          <label>Your Name</label>
          <input type="text" name="Name"></input>

          <label>Email</label>
          <input type="email" name="Email"></input>

          <label>Subject</label>
          <input type="text" name="Subject"></input>
          
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message here" name="Message"></textarea>
          <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
