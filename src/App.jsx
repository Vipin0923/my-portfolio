import './App.css'
import profileImg from './assets/profile.jpg'

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`

  const skills = [
    'Python',
    'SQL',
    'Machine Learning',
    'Data Analysis',
    'Pandas',
    'NumPy',
    'Scikit-Learn',
    'Power BI',
    'Git & GitHub',
    'React',
  ]

  const projects = [
    {
      title: 'Titanic Survival Prediction',
      description:
        'A machine learning project that predicts passenger survival using Titanic passenger information.',
      technology: 'Python • Pandas • Scikit-Learn',
      link: 'https://github.com/Vipin0923/CODSOFT',
    },
    {
      title: 'Movie Rating Prediction',
      description:
        'A regression-based project created to estimate movie ratings using historical movie data.',
      technology: 'Python • Regression • Data Analysis',
      link: 'https://github.com/Vipin0923/CODSOFT',
    },
    {
      title: 'Iris Flower Classification',
      description:
        'A classification model that predicts the species of an Iris flower using its measurements.',
      technology: 'Python • Classification • Scikit-Learn',
      link: 'https://github.com/Vipin0923/CODSOFT',
    },
  ]

  const certificates = [
    {
      title: 'Data Science Internship',
      organization: 'CODSOFT',
      description:
        'Completed a one-month Data Science internship and worked on three machine learning projects.',
    },
  ]

  const achievements = [
    {
      number: '01',
      title: 'Completed Three Data Science Projects',
      description:
        'Successfully completed Titanic, Movie Rating and Iris Flower machine learning projects.',
    },
    {
      number: '02',
      title: 'Completed CODSOFT Internship',
      description:
        'Completed a one-month Data Science internship and gained practical project experience.',
    },
    {
      number: '03',
      title: 'Created a Live Portfolio',
      description:
        'Built and deployed a responsive React portfolio website using GitHub Pages.',
    },
    {
      number: '04',
      title: 'Organized Projects on GitHub',
      description:
        'Structured and uploaded Data Science projects with code, datasets and documentation.',
    },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Vipin<span>.</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#certificates">Certificates</a>
          </li>

          <li>
            <a href="#achievements">Achievements</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="background-glow glow-one"></div>
          <div className="background-glow glow-two"></div>

          <div className="hero-content glass-card">
            <div className="profile-border">
              <img
                src={profileImg}
                alt="Vipin Vishwakarma"
                className="profile-img"
              />
            </div>

            <p className="intro-text">Hello, I am</p>

            <h1>Vipin Vishwakarma</h1>

            <div className="typing-container">
              <span className="typing-text">
                Data Science Student | ML Enthusiast
              </span>
            </div>

            <p className="hero-description">
              I am passionate about Data Science, Machine Learning, Artificial
              Intelligence and building useful solutions with real-world data.
            </p>

            <p className="technology-text">
              Python <span>•</span> Machine Learning <span>•</span> Data
              Analytics <span>•</span> Artificial Intelligence
            </p>

            <div className="hero-buttons">
              <a href={resumeUrl} download className="primary-btn">
                Download Resume
              </a>

              <a
                href="https://github.com/Vipin0923"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vipin-data-scientist/"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                LinkedIn
              </a>
            </div>

            <div className="college-info">
              <p>Technocrats Institute of Technology, Bhopal</p>
              <p>Second Year • Data Science • CGPA: 6.98</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="stats-section">
          <div className="stats-container">
            <article className="stat-card glass-card">
              <h2>3+</h2>
              <p>Projects Completed</p>
            </article>

            <article className="stat-card glass-card">
              <h2>1</h2>
              <p>Internship Completed</p>
            </article>

            <article className="stat-card glass-card">
              <h2>10+</h2>
              <p>Technical Skills</p>
            </article>

            <article className="stat-card glass-card">
              <h2>2nd</h2>
              <p>Year Student</p>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p>Introduction</p>
            <h2>About Me</h2>
          </div>

          <div className="about-container">
            <article className="about-card glass-card">
              <h3>Who I Am</h3>

              <p>
                I am a Data Science student at Technocrats Institute of
                Technology, Bhopal. I am developing my skills in Python,
                Machine Learning, Data Analysis and Artificial Intelligence.
              </p>

              <p>
                I enjoy working with datasets, discovering meaningful patterns
                and creating beginner-friendly machine learning solutions.
              </p>

              <p>
                My goal is to become a skilled Data Scientist and contribute to
                real-world data-driven projects.
              </p>
            </article>

            <div className="details-grid">
              <article className="detail-card glass-card">
                <span>01</span>
                <h3>Education</h3>
                <p>Data Science Student</p>
              </article>

              <article className="detail-card glass-card">
                <span>02</span>
                <h3>Current Year</h3>
                <p>Second Year</p>
              </article>

              <article className="detail-card glass-card">
                <span>03</span>
                <h3>Internship</h3>
                <p>CODSOFT Data Science</p>
              </article>

              <article className="detail-card glass-card">
                <span>04</span>
                <h3>Location</h3>
                <p>Bhopal, India</p>
              </article>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p>Technologies I Work With</p>
            <h2>My Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card glass-card" key={skill}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{skill}</h3>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p>My Practical Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card glass-card" key={project.title}>
                <span className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">{project.technology}</div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <p>My Practical Experience</p>
            <h2>Experience</h2>
          </div>

          <div className="experience-container glass-card">
            <div className="experience-header">
              <div>
                <p className="experience-company">CODSOFT</p>
                <h3>Data Science Intern</h3>
              </div>

              <span className="experience-duration">1 Month</span>
            </div>

            <p className="experience-description">
              Completed a Data Science internship focused on Machine Learning,
              Data Analysis and practical project development.
            </p>

            <ul className="experience-list">
              <li>Built a Titanic Survival Prediction model.</li>
              <li>Developed a Movie Rating Prediction project.</li>
              <li>Created an Iris Flower Classification model.</li>
              <li>Worked with Python, Pandas, NumPy and Scikit-Learn.</li>
              <li>Improved data cleaning and model evaluation skills.</li>
              <li>Uploaded structured project files to GitHub.</li>
            </ul>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="section certificates-section">
          <div className="section-heading">
            <p>Learning and Recognition</p>
            <h2>Certificates</h2>
          </div>

          <div className="certificates-grid single-certificate">
            {certificates.map((certificate, index) => (
              <article
                className="certificate-card glass-card"
                key={certificate.title}
              >
                <span className="certificate-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="certificate-icon">✓</div>

                <h3>{certificate.title}</h3>

                <p className="certificate-organization">
                  {certificate.organization}
                </p>

                <p>{certificate.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section achievements-section">
          <div className="section-heading">
            <p>My Progress</p>
            <h2>Achievements</h2>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <article
                className="achievement-card glass-card"
                key={achievement.number}
              >
                <span className="achievement-number">
                  {achievement.number}
                </span>

                <div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="contact-card glass-card">
            <div className="section-heading">
              <p>Get in Touch</p>
              <h2>Contact Me</h2>
            </div>

            <p className="contact-description">
              I am open to internships, learning opportunities, collaborations
              and beginner Data Science projects.
            </p>

            <a
              href="mailto:vipinbabuvishwakarma@gmail.com"
              className="email-link"
            >
              vipinbabuvishwakarma@gmail.com
            </a>

            <p className="location-text">
              Bhopal, Madhya Pradesh, India
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:vipinbabuvishwakarma@gmail.com"
                className="primary-btn"
              >
                Send Email
              </a>

              <a
                href="https://github.com/Vipin0923"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vipin-data-scientist/"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>
              Vipin<span>.</span>
            </h3>
            <p>Data Science Student and Machine Learning Enthusiast</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Vipin0923"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vipin-data-scientist/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:vipinbabuvishwakarma@gmail.com">
              Email
            </a>
          </div>
        </div>

        <p className="copyright">
          © 2026 Vipin Vishwakarma. Built with React and Vite.
        </p>
      </footer>
    </>
  )
}

export default App