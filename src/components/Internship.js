import React from 'react';
import '../Section.css';

const experience = [
  {
    title: 'Software Engineer Intern',
    company: 'Optum Global Solutions',
    link: 'https://www.optum.in/',
    location: 'Hyderabad',
    duration: '25 July 2023 to 24 September 2023',

    responsibilities: [
      'Converted XML files to JSON using Beautiful Soup and stored it in MongoDB',
      'Developed a full stack web application using Flask and MongoDB.',
      'Built Docker images for Flask and MongoDB.',
    ],
    skills: [
      'Python',
      'Beautiful Soup',
      'XML DOM',
      'PyMongo',
      'MongoDB',
      'Flask',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'Jinja2',
      'Docker',
    ],
    achievements: [
      'Successfully converted 13.2k XML files to JSON.',
      'Developed a Flask Application that displays data effectively with user-friendly interface.',
      'Received positive feedback for delivering tasks ahead of schedule.',
    ],
  },
];

const Internship = () => {
  return (
    <section id='internship' className='section'>
      <h3>Internship</h3>
      <hr className='grey-line'></hr>

      {experience.map((internship, index) => (
        <div key={index} className='internship-card'>
          <h4 className=''>{internship.title}</h4>
          <h5>
            <a href={internship.link} target='__blank'>
              {internship.company}
            </a>
          </h5>
          <p>
            <i>
              {internship.location} ({internship.duration})
            </i>
          </p>
          <h6>Responsibilities :</h6>
          <ul>
            {internship.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            <h6>Skills : </h6>
            <span className='skill'>{internship.skills.join(', ')}.</span>
          </p>
          <h6>Achievements :</h6>
          <ul>
            {internship.achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Internship;
