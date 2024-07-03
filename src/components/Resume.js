import React from 'react';
import '../Section.css';

const Resume = () => {
  const pdfFilePath = `${process.env.PUBLIC_URL}/AlekhyaResume.pdf`;
  const resumeImage = `${process.env.PUBLIC_URL}/images/Resume_page.jpg`;
  return (
    <div className='section'>
      <h3>Resume</h3>
      <hr className='grey-line'></hr>
      <a href={pdfFilePath} download={pdfFilePath} class='download-button'>
        Download
      </a>
      <img src={resumeImage} alt='resume' width='100%' />
    </div>
  );
};

export default Resume;
