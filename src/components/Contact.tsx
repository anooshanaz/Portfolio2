import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid grid grid-cols-2">
        <div className="space-y-5">
          <h2 className="contact-heading">Get in touch</h2>
          <p className="contact-text">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="icon-text">
            <FaMailBulk size={30} /> anoosha571@gmail.com
          </div>
          <div className="icon-text">
            <FaGithub size={30} /> https://github.com/anooshanaz
          </div>
          <div className="icon-text">
            <FaLinkedin size={30} /> https://www.linkedin.com/posts/anoosha-naz
          </div>
        </div>
        <div className="space-y-8">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="input-field" id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="text" className="input-field" id="email" />
          </div>
          <div className="input-group">
            <label htmlFor="msg">Message:</label>
            <textarea className="textarea-field" id="msg" rows={8}></textarea>
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
