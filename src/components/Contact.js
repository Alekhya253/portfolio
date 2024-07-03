import React from 'react';
import '../Section.css';

const Contact = () => {
  return (
    <div className='section'>
      <h3>Contact</h3>
      <hr className='grey-line'></hr>
      <p>
        Thank you for visiting my website!
        <br></br>You can email me at
        <i>
          <b> alekhyaberam3@gmail.com</b>.
        </i>
      </p>

      <div className='icons-contact'>
        <a href='mailto:alekhyaberam3@gmail.com'>
          <i class='fa-solid fa-envelope icon'></i>
        </a>

        <a href='https://www.linkedin.com/in/alekhyaberam/' target='__blank'>
          <i class='fa-brands fa-linkedin-in icon'></i>
        </a>

        <a href='https://github.com/alekhya253' target='__blank'>
          <i class='fa-brands fa-github icon'></i>
        </a>

        <a href='https://www.instagram.com/_alekhya__/' target='__blank'>
          <i class='fa-brands fa-instagram icon'></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
