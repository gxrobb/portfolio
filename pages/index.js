import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import profilePic from '../public/images/me.jpg'
import ProjectCard from '../components/ProjectCard.js'
import EmployerDescription from '../components/EmployerDescription.js'
import { jobList } from '../constants/jobs.js'

export default function Home() { 

  const [activeEmployer, setActiveEmployer] = useState(jobList[0]);

  function ListAllTitles(data){
      return (
        <>
          {
            data.data.map((value) => {
              return <li onClick={ () => setActiveEmployer(value) }  className={activeEmployer.id == value.id ? styles.active : null} key={value.id}> {value.label} </li>})}
        </>
      )
    }
    
  return (
    <>
      <Head>
        <title>Robert Kregloh&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.socialIcons}>
        <ul>
          <li><div className={styles.line}></div></li>
          <li>
            <a href="https://www.linkedin.com/in/rkregloh/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/gxrobb" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:gxrobb@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="/resume.pdf">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><div className={styles.line}></div></li>
        </ul>
      </nav>
 

      <main className={styles.main}>
        <section className="container">
          <div className={styles.heroWrapper}>
            <p>Oh, Hello there! My name is</p>
            <h1>ROBERT KREGLOH</h1>
            <h3>And I like to build <span className={styles.highlight}>useful</span> things!</h3>
            <p>I am a <span className={styles.highlight}>Front-End Web Developer</span> who has a passion for graphic and interaction design and a background in visual effects and motion graphics</p>
            <a href="mailto:gxrobb@gmail.com"><button>Get In Touch</button></a>
          </div>

        </section> 

        <div id="about" />
        <section className={`${styles.copySection} ${styles.aboutMe} container`}>
            <div className={styles.title}>
              <h2>About Me</h2>
            </div>
            <div className={styles.copyGrid}>
              <div className={styles.item}>
                <p>I am a Front-End Developer who works mainly with Next.js (React) and Vue.js. I am adept at building custom web solutions involving JavaScipt, HTML and CSS. I have also been known to dabble with Back End, DevOps, and even write a MySQL query every now and then!</p>
                <p>I started developing for the web professionally in 2015 and have not stopped creating beautiful, useful and intuitive websites and interfaces since! I am what you would call a &ldquo;User Defender&ldquo; when it comes to UX. I love making painless designs that just plain work!</p>
                <p>Some of my hobbies include playing with my newborn daughter, playing video games(when she lets me!), tinkering with new technology, painting miniatures and playing Dungeons & Dragons!</p>
                <p>Here is a short list of technologies I currently use daily.</p>
                <div className={styles.ulGrid}>
                  <div>
                    <ul>
                      <li>JavaScript</li>
                      <li>Vue.js</li>
                      <li>SASS</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Docker</li>
                      <li>Adobe Suite</li>
                      <li>Postman</li>
                      <li>VS Code</li>
                    </ul>
                  </div>
                </div>
              
              </div>
              <div className={styles.item}>
                <div className={styles.profilePicWrapper}>
                  <Image src={profilePic} alt="Picture of me, Robert Kregloh" />
                </div>
              </div>
            </div>
        </section>

        <div id="experience" />
        <section className={`${styles.copySection} ${styles.experience} container`}>
          <div className={styles.title}>
            <h2>Places I&apos;ve Worked</h2>
          </div>
          <div className={styles.experienceGrid}>
            <div className={styles.employer}>
              <ul>
                <ListAllTitles data={jobList} />
              </ul>
            </div>
            <div className={styles.employerDescription}>
            
              <EmployerDescription jobObject={activeEmployer}/>
            </div>
          </div>
        </section>

        <div id="portfolio" />
        <section className={`${styles.copySection} ${styles.projects} container`}>
          <div className={styles.title}>
            <h2>Some recent projects</h2>
          </div>
          <div className={styles.projectsWrapper}>
            <ProjectCard 
              imgUrl={'/images/poolgarden.png'}
              stackList={'Next.js, SASS, Design'}
              logoCopy={'Pool.Garden'}
              projectLink={'/images/pgfull.png'}
              shortDescription={'Chia Cryptocurrency Mining Pool.'}
            />
            <ProjectCard 
              imgUrl={'/images/firewalls.png'} 
              stackList={'Magento 2, LESS, Docker, PHP, JS'}
              logoCopy={'Firewalls.com'}
              projectLink={'https://www.firewalls.com'}
              shortDescription={'Firewalls Reseller Website.'}
            />
            <ProjectCard
              imgUrl={'/images/fwcblog.png'}
              stackList={'Wordpress, SASS, PHP, Design'}
              logoCopy={'Firewalls.com Blog'}
              projectLink={'https://www.firewalls.com/blog'}
              shortDescription={'Firewalls Blog.'}
            />
            <ProjectCard
              imgUrl={'/images/rpgipsum.jpg'}
              stackList={'JavaScript'}
              logoCopy={'RPG Ipsum'}
              projectLink={'/rpgIpsum'}
              shortDescription={'Lorem Ipsum Generator.'}
            />
            {/* <ProjectCard
              imgUrl={'/images/p1v3.jpg'}
              stackList={'Wordpress, PHP, SASS, Design, JS'}
              logoCopy={'Player One Esports'}
              projectLink={'https://www.playeroneesports.com'}
              shortDescription={'Esports Gaming Website.'}
            /> */}
          </div>
        </section>

        <div id="contact" />
        <section className={`${styles.copySection} ${styles.contact} container`}>
          <div className={styles.title}>
            <h2>Contact</h2>
          </div>
          <div className={styles.contactWrapper}>
              <p>If you have any questions, or just want to say hi, feel free to shoot me an email! Click the button below to launch your preferred email client!</p>
              <a href="mailto:gxrobb@gmail.com"><button>Email Me</button></a>
            </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Designed And Developed By Robert Kregloh | Deployed On Netlify!</p>
      </footer>
    </>
  )
}
