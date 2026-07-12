import './App.css'
import profileImg from './assets/profile.jpg'

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="portfolio">
        <img
          src={profileImg}
          alt="Vipin Profile"
          className="profile-img"
        />

        <h1>Hello, I am Vipin 👋</h1>

        <h2>Data Science Student</h2>

        <p>
          I am passionate about Data Science, Machine Learning and AI.
        </p>

        <p>
          Python • Machine Learning • Data Analytics • AI Enthusiast
        </p>

<a href="/Resume.pdf" download>
  <button type="button">
    Download Resume
  </button>
</a>

        <p className="college">
          Technocrats Institute of Technology, Bhopal
        </p>

        <p className="cgpa">
          CGPA: 6.98
        </p>

        <div className="social-buttons">
          <a
            href="https://github.com/Vipin0923"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              GitHub
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/vipin-data-scientist/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              LinkedIn
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>

        <p>
          I am a Data Science student at Technocrats Institute of Technology,
          Bhopal.
        </p>

        <p>
          I am interested in Machine Learning, Data Analytics and Artificial
          Intelligence.
        </p>

        <p>
          I enjoy working on real-world datasets and building projects using
          Python, Pandas, Scikit-Learn and Data Visualization tools.
        </p>
      </section>
      <section className="skills-section">
  <h2>My Skills</h2>

  <div className="skills-container">
    <div className="skill-card">Python</div>
    <div className="skill-card">SQL</div>
    <div className="skill-card">Machine Learning</div>
    <div className="skill-card">Data Analysis</div>
    <div className="skill-card">Pandas</div>
    <div className="skill-card">Scikit-Learn</div>
    <div className="skill-card">Power BI</div>
    <div className="skill-card">Git & GitHub</div>
  </div>
</section>
<section className="projects-section">
  <h2>My Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>Titanic Survival Prediction</h3>
      <p>
        Machine Learning project that predicts passenger survival using the Titanic dataset.
      </p>
    </div>

    <div className="project-card">
      <h3>Movie Rating Prediction</h3>
      <p>
        Data Science project that predicts movie ratings using regression techniques.
      </p>
    </div>

    <div className="project-card">
      <h3>Iris Flower Classification</h3>
      <p>
        Classification model that identifies flower species using machine learning.
      </p>
    </div>

  </div>
</section>
<section className="contact-section">
  <h2>Contact Me</h2>

  <p>Email: hbollywoodmusichub@gmail.com</p>

  <p>Location: Bhopal, Madhya Pradesh, India</p>

  <div className="contact-links">
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
  </div>
</section>

<footer>
  <p>© 2026 Vipin Vishwakarma | Data Science Portfolio</p>
</footer>
    </>
  )
}

export default App