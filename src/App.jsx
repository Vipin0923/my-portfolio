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
    'Scikit-Learn',
    'Power BI',
    'Git & GitHub',
  ]

  const projects = [
    {
      title: 'Titanic Survival Prediction',
      description:
        'Machine learning project that predicts whether a passenger survived using Titanic passenger data.',
      technology: 'Python • Pandas • Scikit-Learn',
      link: 'https://github.com/Vipin0923/CODSOFT',
    },
    {
      title: 'Movie Rating Prediction',
      description:
        'Regression project created to estimate movie ratings using historical movie information.',
      technology: 'Python • Regression • Data Analysis',
      link: 'https://github.com/Vipin0923/CODSOFT',
    },
    {
      title: 'Iris Flower Classification',
      description:
        'Classification model that predicts the species of an Iris flower using its measurements.',
      technology: 'Python • Classification • Scikit-Learn',
      link: 'https://github.com/Vipin0923/CODSOFT',
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <img
              src={profileImg}
              alt="Vipin Vishwakarma"
              className="profile-img"
            />

            <p className="intro-text">Hello, I am</p>

            <h1>Vipin Vishwakarma</h1>

            <h2>Data Science Student</h2>

            <p className="hero-description">
              I am passionate about Data Science, Machine Learning, Artificial
              Intelligence and building useful projects with real-world data.
            </p>

            <p className="technology-text">
              Python • Machine Learning • Data Analytics • AI
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
              <p>Second Year • CGPA: 6.98</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p>Introduction</p>
            <h2>About Me</h2>
          </div>

          <div className="about-container">
            <div className="about-card">
              <h3>Who I Am</h3>

              <p>
                I am a Data Science student at Technocrats Institute of
                Technology, Bhopal. I am currently developing my skills in
                Python, Machine Learning, Data Analysis and Artificial
                Intelligence.
              </p>

              <p>
                I enjoy working with datasets, finding meaningful patterns and
                building beginner-friendly machine learning projects.
              </p>
            </div>

            <div className="details-grid">
              <div className="detail-card">
                <span>01</span>
                <h3>Education</h3>
                <p>Data Science Student</p>
              </div>

              <div className="detail-card">
                <span>02</span>
                <h3>Current Year</h3>
                <p>Second Year</p>
              </div>

              <div className="detail-card">
                <span>03</span>
                <h3>Internship</h3>
                <p>CODSOFT Data Science</p>
              </div>

              <div className="detail-card">
                <span>04</span>
                <h3>Location</h3>
                <p>Bhopal, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p>What I Know</p>
            <h2>My Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p>My Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
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
        <section id="experience" className="section skills-section">
          <div className="section-heading">
            <p>My Practical Experience</p>
            <h2>Experience</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <span className="project-number">01</span>

              <h3>Data Science Intern — CODSOFT</h3>

              <p>
                Completed a one-month Data Science internship where I worked on
                machine learning and data analysis projects using real-world
                datasets.
              </p>

              <div className="project-tech">
                Duration: 1 Month
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">02</span>

              <h3>Projects Completed</h3>

              <p>
                Built Titanic Survival Prediction, Movie Rating Prediction and
                Iris Flower Classification projects during the internship.
              </p>

              <div className="project-tech">
                Machine Learning • Classification • Regression
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">03</span>

              <h3>Skills Developed</h3>

              <p>
                Improved my understanding of data cleaning, exploratory data
                analysis, model training, testing and project documentation.
              </p>

              <div className="project-tech">
                Python • Pandas • NumPy • Scikit-Learn
              </div>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="section-heading">
              <p>Get in Touch</p>
              <h2>Contact Me</h2>
            </div>

            <p className="contact-description">
              I am open to internships, learning opportunities and beginner
              Data Science projects.
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
        <p>© 2026 Vipin Vishwakarma</p>
        <p>Built with React and Vite</p>
      </footer>
    </>
  )
}

export default App