import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CustomNavbar from './components/CustomNavbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className='app'>
        <CustomNavbar />

        <Sidebar />
        <div className='content'>
          <div>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/internship' element={<Internship />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
