import React from 'react';
import '../Section.css';

const skills = [
  {
    category: 'Web Development',
    list: [
      'React.js',
      'Express.js',
      'Node.js',
      'Flask',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  { category: 'Database', list: ['SQL', 'MongoDB'] },
  { category: 'Programming Languages', list: ['Python', 'C++', 'C'] },
  { category: 'Cloud', list: ['Azure Fundamentals'] },
  { category: 'Operating Systems', list: ['Unix/Linux', 'Windows'] },
  { category: 'Tools', list: ['Docker', 'Postman'] },
  { category: 'Version Control', list: ['Git'] },
];

const certifications = [
  {
    name: 'Microsoft Certified : Azure Fundamentals',
    link: 'https://learn.microsoft.com/en-us/users/bsreedurgaalekhya-7224/credentials/db63dd05b4ea4765',
  },
  {
    name: 'SQL Essential Training',
    link: 'https://media.licdn.com/dms/image/D561FAQHRkWx-VzBr6A/feedshare-document-cover-images_1280/0/1684426013959?e=1720202400&v=beta&t=ATIJbRnMk10Pczp_-lUFb7eXj8n2tTNImo5p55R4zXw',
  },
  {
    name: 'React.js Essential Training',
    link: 'https://media.licdn.com/dms/image/D561FAQHRkWx-VzBr6A/feedshare-document-cover-images_1280/0/1684426013959?e=1720202400&v=beta&t=ATIJbRnMk10Pczp_-lUFb7eXj8n2tTNImo5p55R4zXw',
  },
  {
    name: 'NoSQL Essential Training',
    link: 'https://media.licdn.com/dms/image/D561FAQHRkWx-VzBr6A/feedshare-document-cover-images_1280/0/1684426013959?e=1720202400&v=beta&t=ATIJbRnMk10Pczp_-lUFb7eXj8n2tTNImo5p55R4zXw',
  },
  {
    name: 'MERN Essential Training',
    link: 'https://media.licdn.com/dms/image/D561FAQHRkWx-VzBr6A/feedshare-document-cover-images_1280/0/1684426013959?e=1720202400&v=beta&t=ATIJbRnMk10Pczp_-lUFb7eXj8n2tTNImo5p55R4zXw',
  },
  {
    name: 'JavaScript Essential Training',
    link: 'https://media.licdn.com/dms/image/D561FAQHRkWx-VzBr6A/feedshare-document-cover-images_1280/0/1684426013959?e=1720202400&v=beta&t=ATIJbRnMk10Pczp_-lUFb7eXj8n2tTNImo5p55R4zXw',
  },
  {
    name: 'Git Essential Training',
    link: 'https://media.licdn.com/dms/image/D561FAQHRkWx-VzBr6A/feedshare-document-cover-images_1280/0/1684426013959?e=1720202400&v=beta&t=ATIJbRnMk10Pczp_-lUFb7eXj8n2tTNImo5p55R4zXw',
  },
];
const Skills = () => {
  return (
    <div className='section'>
      <h3>Skills</h3>
      <hr className='grey-line'></hr>

      <p>
        <span>Here's a list of my skills, courses and certifications.</span>
      </p>
      <table className='skills-table'>
        <tbody>
          {skills.map((skillCategory, index) => (
            <tr key={index}>
              <td className='skill-heading'>{skillCategory.category}</td>
              <td>
                {skillCategory.list.map((skill, idx) => (
                  <span key={idx} className='skill'>
                    {skill}
                    {idx !== skillCategory.list.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h4>Certifications & Courses</h4>
      <br></br>
      <ul>
        {certifications.map((certificate, ind) => (
          <li key={ind} className='certificate'>
            <a href={certificate.link} target='__blank'>
              <span className='certificate-name'> {certificate.name}</span>

              <i class='fa-solid fa-arrow-up-right-from-square icon'></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
