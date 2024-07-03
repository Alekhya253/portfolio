import React from 'react';
import '../Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img
        src={`${process.env.PUBLIC_URL}/images/photo.png`}
        alt='Alekhya'
        className='profile-photo'
      />
      <h4 className='my-name'>B SREE DURGA ALEKHYA</h4>
      <p>
        <a href='mailto:alekhyaberam3@gmail.com' className='icons'>
          <i class='fa-solid fa-envelope flip-on-hover'></i>
        </a>
        alekhyaberam3@gmail.com
      </p>
      <hr class='grey-line'></hr>
      <p className='intro'>
        Hello, Welcome to my portfolio! &#128075;
        <br></br>
        <br></br>
        <span className='intro-span'>
          I am a computer science graduate from BVRIT Hyderabad College of
          Engineering for Women. Please feel free to read more about me, or you
          can check out my resume, projects, internship, or contact me.
        </span>
      </p>
      <hr class='grey-line'></hr>
      <div className='icons'>
        <a href='mailto:alekhyaberam3@gmail.com'>
          <i class='fa-solid fa-envelope flip-on-hover'></i>
        </a>

        <a href='https://www.linkedin.com/in/alekhyaberam/' target='__blank'>
          <i class='fa-brands fa-linkedin-in flip-on-hover'></i>
        </a>

        <a href='https://github.com/alekhya253' target='__blank'>
          <i class='fa-brands fa-github flip-on-hover'></i>
        </a>

        <a href='https://www.instagram.com/_alekhya__/' target='__blank'>
          <i class='fa-brands fa-instagram flip-on-hover'></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
