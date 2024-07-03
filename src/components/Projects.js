import React from 'react';
import '../Section.css';

const myProjects = [
  {
    title: 'Weather App',
    image: `${process.env.PUBLIC_URL}/images/p1.png`,
    Description: [
      'A React Application that uses OpenWeatherAPI and displays weather details.',
      "Implemented functionality to fetch and display the weather details for the user's current location and input location.",
      'Successfully deployed the app using AWS Amplify.',
    ],
    links: [
      'https://github.com/Alekhya253/my-weather-app',
      'https://prod.d23mkk5ub06dbd.amplifyapp.com/',
    ],
  },
  {
    title: 'Blog Application',
    image: `${process.env.PUBLIC_URL}/images/p2.png`,
    Description: [
      'Developed a dynamic personal blogging platform utilizing the MERN stack.',
      'Implemented user authentication with Google Firebase, ensuring secure access control.',
      'Enhanced user interaction by integrating features such as article upvoting and commenting, increasing user engagement.',
    ],
    links: ['https://github.com/Alekhya253/full-stack-site'],
  },
  {
    title: 'To Do App',
    image: `${process.env.PUBLIC_URL}/images/p3.png`,
    Description: [
      'Developed a Django-based Task Management Application with user authentication.',
      'Implemented features for adding tasks, marking them as completed, edit, search and deleting tasks',
      'Users can add description, deadline, collaborators, category and priority to each task for comprehensive task organization.',
    ],
    links: ['https://github.com/Alekhya253/ToDoApp'],
  },
];
const Projects = () => {
  return (
    <div className='section'>
      <h3>Projects</h3>
      <hr className='grey-line'></hr>
      <ul>
        {myProjects.map((project, ind) => (
          <li key={ind} className='project'>
            <div className='project-content'>
              <h4 className='project-title'>{project.title}</h4>
              <img
                src={project.image}
                alt={project.title}
                className='project-image'
              />
              <hr className='grey-line'></hr>
              <ul className='project-description'>
                {project.Description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <div className='project-links'>
                <a
                  href={project.links[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
                {project.links[1] && (
                  <a
                    href={project.links[1]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
