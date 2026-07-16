import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import './App.css'
import profileImg from './assets/profile.jpg'


function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    if (!context) return undefined

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let animationFrameId
    let particles = []
    const pointer = { x: null, y: null }

    const createParticles = () => {
      const particleCount = Math.min(
        82,
        Math.max(34, Math.floor(window.innerWidth / 22)),
      )

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: Math.random() * 1.6 + 0.7,
      }))
    }

    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      createParticles()
    }

    const handlePointerMove = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    const handlePointerLeave = () => {
      pointer.x = null
      pointer.y = null
    }

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particles.forEach((particle) => {
        if (!reduceMotion) {
          particle.x += particle.vx
          particle.y += particle.vy
        }

        if (particle.x < -20) particle.x = window.innerWidth + 20
        if (particle.x > window.innerWidth + 20) particle.x = -20
        if (particle.y < -20) particle.y = window.innerHeight + 20
        if (particle.y > window.innerHeight + 20) particle.y = -20

        if (
          pointer.x !== null &&
          pointer.y !== null &&
          !reduceMotion
        ) {
          const dx = pointer.x - particle.x
          const dy = pointer.y - particle.y
          const distance = Math.hypot(dx, dy)

          if (distance > 0 && distance < 130) {
            particle.x -= (dx / distance) * 0.18
            particle.y -= (dy / distance) * 0.18
          }
        }

        context.beginPath()
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        )
        context.fillStyle = 'rgba(56, 189, 248, 0.55)'
        context.fill()
      })

      for (let first = 0; first < particles.length; first += 1) {
        for (
          let second = first + 1;
          second < particles.length;
          second += 1
        ) {
          const dx = particles[first].x - particles[second].x
          const dy = particles[first].y - particles[second].y
          const distance = Math.hypot(dx, dy)

          if (distance < 118) {
            context.beginPath()
            context.moveTo(particles[first].x, particles[first].y)
            context.lineTo(particles[second].x, particles[second].y)
            context.strokeStyle = `rgba(56, 189, 248, ${
              0.16 * (1 - distance / 118)
            })`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      }

      if (!reduceMotion) {
        animationFrameId = window.requestAnimationFrame(draw)
      }
    }

    resizeCanvas()
    draw()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="neural-background"
      aria-hidden="true"
    />
  )
}

function BubbleCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return undefined

    let animationFrameId
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY

    const moveCursor = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }

      animationFrameId = window.requestAnimationFrame(animateRing)
    }

    const updateHoverState = (event) => {
      const interactiveElement = event.target.closest(
        'a, button, .tech-card, .premium-project-card, .journey-card, .detail-card',
      )

      ringRef.current?.classList.toggle(
        'cursor-hover',
        Boolean(interactiveElement),
      )
    }

    window.addEventListener('pointermove', moveCursor)
    document.addEventListener('mouseover', updateHoverState)
    animateRing()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointermove', moveCursor)
      document.removeEventListener('mouseover', updateHoverState)
    }
  }, [])

  return (
    <>
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

function RotatingRole() {
  const roles = [
    'Data Science Student',
    'Machine Learning Enthusiast',
    'Aspiring Data Scientist',
  ]

  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [roles.length])

  return (
    <motion.span
      key={roles[roleIndex]}
      className="rotating-role"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {roles[roleIndex]}
    </motion.span>
  )
}

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`

  const projects = [
    {
      number: '01',
      shortName: 'TITANIC',
      category: 'Machine Learning Classification',
      title: 'Titanic Survival Prediction',
      description:
        'A machine learning model that predicts passenger survival using age, gender, passenger class and other travel information.',
      technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Classification'],
      link: 'https://github.com/Vipin0923/CODSOFT',
      visualClass: 'titanic-visual',
      visualText: 'SURVIVAL',
    },
    {
      number: '02',
      shortName: 'MOVIE RATING',
      category: 'Regression and Data Analysis',
      title: 'Movie Rating Prediction',
      description:
        'A regression-based project that analyses historical movie information and estimates ratings using relevant features.',
      technologies: ['Python', 'Regression', 'Pandas', 'Data Analysis'],
      link: 'https://github.com/Vipin0923/CODSOFT',
      visualClass: 'movie-visual',
      visualText: 'RATING',
    },
    {
      number: '03',
      shortName: 'IRIS',
      category: 'Machine Learning Classification',
      title: 'Iris Flower Classification',
      description:
        'A classification model that predicts Iris flower species using sepal and petal measurements from the Iris dataset.',
      technologies: ['Python', 'Scikit-Learn', 'Classification', 'NumPy'],
      link: 'https://github.com/Vipin0923/CODSOFT',
      visualClass: 'iris-visual',
      visualText: 'CLASSIFY',
    },
  ]

  return (
    <>
      <NeuralBackground />
      <BubbleCursor />

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
            <a href="#skills">Tech Stack</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#experience">Journey</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid"></div>
          <div className="hero-orb hero-orb-one"></div>
          <div className="hero-orb hero-orb-two"></div>
          <div className="hero-data-watermark" aria-hidden="true">
            DATA SCIENTIST
          </div>

          <div className="hero-layout">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="hero-eyebrow">
                DATA SCIENCE PORTFOLIO · 2026
              </p>

              <h1 className="hero-name">
                <span>VIPIN</span>
                <span>VISHWAKARMA</span>
              </h1>

              <div className="hero-role">
                <RotatingRole />
                <span className="hero-role-dot">•</span>
                <span>Python · ML · Data Analytics</span>
              </div>

              <p className="hero-description premium-description">
                I build practical and data-driven solutions using Python,
                Machine Learning, Data Analysis and Artificial Intelligence.
              </p>

              <div className="hero-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Data Analytics</span>
                <span>Artificial Intelligence</span>
              </div>

              <div className="hero-buttons premium-buttons">
                <a
                  href={resumeUrl}
                  download
                  className="primary-btn"
                >
                  Download Resume
                </a>

                <a
                  href="https://github.com/Vipin0923"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  View GitHub
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

              <div className="hero-meta">
                <div>
                  <span>College</span>
                  <strong>
                    Technocrats Institute of Technology
                  </strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>Bhopal, India</strong>
                </div>

                <div>
                  <span>CGPA</span>
                  <strong>6.98</strong>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            >
              <div className="hero-photo-frame">
                <img
                  src={profileImg}
                  alt="Vipin Vishwakarma"
                  className="hero-profile-img"
                />

                <div className="availability-badge">
                  <span></span>
                  Open to internships
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <span>03+</span>
                <p>Projects</p>
              </div>

              <div className="floating-card floating-card-two">
                <span>01</span>
                <p>Internship</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="stats-section">
          <motion.div
            className="stats-container"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <article className="stat-card glass-card">
              <h2>03+</h2>
              <p>Projects Completed</p>
            </article>

            <article className="stat-card glass-card">
              <h2>01</h2>
              <p>Internship Completed</p>
            </article>

            <article className="stat-card glass-card">
              <h2>10+</h2>
              <p>Technical Skills</p>
            </article>

            <article className="stat-card glass-card">
              <h2>6.98</h2>
              <p>Current CGPA</p>
            </article>
          </motion.div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p>Introduction</p>
            <h2>About Me</h2>
          </div>

          <motion.div
            className="about-container"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
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
                My goal is to become a skilled Data Scientist and contribute
                to real-world data-driven projects.
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
          </motion.div>
        </section>

        <section id="skills" className="section tech-section">
          <div className="section-heading tech-heading">
            <p>Technical Foundation</p>
            <h2>Tech Stack</h2>
          </div>

          <motion.div
            className="tech-grid"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <article className="tech-card">
              <div className="tech-card-top">
                <span>01</span>
                <p>Core Skills</p>
              </div>

              <h3>Programming</h3>

              <div className="tech-tags">
                <span>Python</span>
                <span>SQL</span>
              </div>

              <p className="tech-description">
                Writing clean Python programs and working with structured data
                using SQL queries.
              </p>
            </article>

            <article className="tech-card featured-tech-card">
              <div className="tech-card-top">
                <span>02</span>
                <p>Specialization</p>
              </div>

              <h3>Data Science</h3>

              <div className="tech-tags">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Scikit-Learn</span>
                <span>Data Analysis</span>
              </div>

              <p className="tech-description">
                Cleaning datasets, analysing patterns and building machine
                learning models.
              </p>
            </article>

            <article className="tech-card">
              <div className="tech-card-top">
                <span>03</span>
                <p>Visualization</p>
              </div>

              <h3>Analytics Tools</h3>

              <div className="tech-tags">
                <span>Power BI</span>
                <span>Matplotlib</span>
                <span>Jupyter</span>
              </div>

              <p className="tech-description">
                Converting data into clear visual insights, reports and
                interactive dashboards.
              </p>
            </article>

            <article className="tech-card wide-tech-card">
              <div className="tech-card-top">
                <span>04</span>
                <p>Development Workflow</p>
              </div>

              <h3>Web and Version Control</h3>

              <div className="tech-tags">
                <span>React</span>
                <span>Vite</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
              </div>

              <p className="tech-description">
                Building responsive interfaces and managing project versions,
                repositories and deployments.
              </p>
            </article>
          </motion.div>
        </section>

        <section
          id="projects"
          className="section selected-projects-section"
        >
          <div className="projects-heading-row">
            <div className="section-heading projects-heading">
              <p>Selected Work</p>
              <h2>Active Projects</h2>
            </div>

            <p className="projects-introduction">
              Practical Data Science and Machine Learning projects built while
              learning how to clean data, train models and evaluate results.
            </p>
          </div>

          <div className="premium-projects-list">
            {projects.map((project) => (
              <motion.article
                className="premium-project-card"
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: Number(project.number) * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -10 }}
              >
                <div
                  className={`project-visual ${project.visualClass}`}
                >
                  <div className="project-visual-grid"></div>

                  <span className="visual-project-number">
                    {project.number}
                  </span>

                  <div className="visual-center-content">
                    <span>{project.shortName}</span>
                    <strong>{project.visualText}</strong>
                  </div>

                  <div className="visual-data-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="premium-project-content">
                  <div className="project-content-top">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-index">
                      {project.number}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="premium-project-description">
                    {project.description}
                  </p>

                  <div className="premium-project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-button"
                    >
                      View GitHub Project
                      <span>↗</span>
                    </a>

                    <span className="project-status">
                      <i></i>
                      Completed
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="section journey-section"
        >
          <div className="section-heading journey-heading">
            <p>Professional Growth</p>
            <h2>My Journey</h2>
          </div>

          <motion.div
            className="journey-grid"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <article className="journey-main-card">
              <div className="journey-top">
                <span>2026</span>
                <p>CODSOFT INTERNSHIP</p>
              </div>

              <h3>Data Science Intern</h3>

              <p className="journey-description">
                Completed a one-month Data Science internship focused on
                Machine Learning, Data Analysis and practical project
                development.
              </p>

              <div className="journey-highlights">
                <div>
                  <strong>03</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>01</strong>
                  <span>Internship</span>
                </div>

                <div>
                  <strong>10+</strong>
                  <span>Skills</span>
                </div>
              </div>
            </article>

            <article className="journey-card">
              <span>01</span>
              <h4>Titanic Survival Prediction</h4>
              <p>
                Built a machine learning classification model using Python
                and Scikit-Learn.
              </p>
            </article>

            <article className="journey-card">
              <span>02</span>
              <h4>Movie Rating Prediction</h4>
              <p>
                Developed a regression-based project for movie rating
                estimation.
              </p>
            </article>

            <article className="journey-card">
              <span>03</span>
              <h4>Iris Flower Classification</h4>
              <p>
                Created a flower classification model using machine learning
                techniques.
              </p>
            </article>

            <article className="journey-card certificate-card-v2">
              <span>✓</span>
              <h4>CODSOFT Certificate</h4>
              <p>
                Successfully completed the Data Science Internship Program
                and earned certification.
              </p>
            </article>
          </motion.div>
        </section>

        <section id="contact" className="section connect-section">
          <div className="connect-background-text">
            CONNECT
          </div>

          <motion.div
            className="connect-layout"
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="connect-content">
              <p className="connect-eyebrow">
                LET&apos;S WORK TOGETHER
              </p>

              <h2>
                Have an idea?
                <span> Let&apos;s build it.</span>
              </h2>

              <p className="connect-description">
                I am currently open to Data Science internships, learning
                opportunities, collaborations and beginner-friendly
                projects.
              </p>

              <a
                href="mailto:vipinbabuvishwakarma@gmail.com"
                className="connect-email"
              >
                vipinbabuvishwakarma@gmail.com
                <span>↗</span>
              </a>

              <div className="connect-actions">
                <a
                  href="mailto:vipinbabuvishwakarma@gmail.com"
                  className="connect-primary-button"
                >
                  Start a Conversation
                  <span>→</span>
                </a>

                <a
                  href={resumeUrl}
                  download
                  className="connect-secondary-button"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="connect-side-panel">
              <div className="availability-panel">
                <div className="availability-title">
                  <span></span>
                  AVAILABLE FOR OPPORTUNITIES
                </div>

                <h3>Data Science Intern</h3>

                <p>
                  Interested in Machine Learning, Data Analytics and practical
                  real-world problem solving.
                </p>
              </div>

              <div className="contact-detail-row">
                <span>Location</span>
                <strong>Bhopal, Madhya Pradesh</strong>
              </div>

              <div className="contact-detail-row">
                <span>Education</span>
                <strong>Data Science · Second Year</strong>
              </div>

              <div className="contact-detail-row">
                <span>Response Time</span>
                <strong>Usually within 24 hours</strong>
              </div>

              <div className="connect-social-links">
                <a
                  href="https://github.com/Vipin0923"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vipin-data-scientist/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>
              Vipin<span>.</span>
            </h3>

            <p>
              Data Science Student and Machine Learning Enthusiast
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Back to Top</a>

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