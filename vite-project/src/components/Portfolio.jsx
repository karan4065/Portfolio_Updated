import React from 'react';
import '../Portfolio.css';
import image from '../images/image.png';
import image2 from '../images/image2.png';
import quiz from '../images/quiz.png'
 

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <section className="portfolio-section">
        <h2 className="portfolio-title">Portfolio</h2>

        <div className='portfolio-container'>

          {/* Project 1: Online Bookstore */}
          <div className="portfolio-project ">
            <div className="project-left">
              <div className="image-hover-container">
                <img
                  src={image}
                  alt="Online AI Tool App"
                  className="project-image hover-scale"
                />
                <div className="custom-overlay-icons">
                  <a
                    href="https://github.com/karan4065/Online-AI-Tools-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-circle"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://karnexai.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-circle"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
           <div className="project-right">
              <h3 className="project-title pink slide-in-left">Online AI Tools App</h3>
              <p className="project-description">
                A powerful AI-based web platform offering various tools like Article generation, image generator, Background removal, etc. Users can log in, use multiple AI features, save outputs, and enjoy a seamless, responsive experience with subscription option.
              </p>
              <div className="tech-stack">
                <span>React.js</span>
                <span>Clerk Auth</span>
                <span>PostgreSQL</span>
                <span>Tailwind CSS</span>
              </div>
            </div>

          </div>

          {/* Project 2: Student Management Portal */}
          <div className="portfolio-project reverse fade-in">
            <div className="project-left">
              <h3 className="project-title pink slide-in-right">E-BookHub Portal</h3>
              <p className="project-description">
                A full-featured online bookstore portal for managing books, users, and orders. It includes secure role-based access control, user login/signup, and a responsive dashboard with real-time cart and order tracking. Integrated with a secure payment gateway to enable seamless online transactions.
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                  
              </div>
            </div>
            <div className="project-right">
              <div className="image-hover-container">
                <img
                  src={image2}
                  alt="E-BookHub Portal"
                  className="project-image hover-scale"
                />
                <div className="custom-overlay-icons">
                  <a
                    href="https://github.com/karan4065/BookNest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-circle"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://booknesto.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-circle"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

         {/* Project 3: College Quiz System */}
<div className="portfolio-project fade-in">
  <div className="project-left">
    <div className="image-hover-container">
      <img
        src={quiz}
        alt="College Quiz System"
        className="project-image hover-scale"
      />
      <div className="custom-overlay-icons">
        <a
          href="https://github.com/karan4065/Quiz_System_SVPCET"
          target="_blank"
          rel="noopener noreferrer"
          className="github-circle"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://svpcetquizsystem.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="live-circle"
        >
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="project-right">
    <h3 className="project-title pink slide-in-left">
      College Quiz System
    </h3>

    <p className="project-description">
      A web-based College Quiz System designed to conduct online quizzes for students.
      The system allows users to attempt multiple-choice questions, tracks scores in real-time,
      and displays results at the end of the quiz. It provides an interactive and user-friendly
      interface suitable for academic assessments.
    </p>

    <div className="tech-stack">
      <span>MongoDB</span>
      <span>Bootstrap</span>
      <span>React</span>
      <span>Node.js</span>
    </div>
  </div>
</div>


        </div>
      </section>
    </div>
  );
};

export default Portfolio;
