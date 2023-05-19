import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import profilePic from '../public/images/me.jpg'
import EmployerDescription from '../components/EmployerDescription.js'
import { jobList } from '../constants/jobs.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faLinkedinIn, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/gxrobb" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/gxrobb" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </li>
          <li>
            <a href="mailto:gxrobb@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
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
            <p>I am a <span className={styles.highlight}>Senior Front-End Web Developer</span> who has a passion for graphic and interaction design.</p>
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
                <p>I am a Front-End Developer based in Indiana. I started developing for the web professionally in 2015 and have not stopped creating beautiful, useful and intuitive websites since! I heard a term once in a podcast that I feel describes my passion, a “User Defender”. Usability is always at the forefront of anything I design or build. I love creating great designs that just plain work!</p>
                <p>Some of my hobbies include spending time with my family, tinkering with new technology, video games, painting miniature figures and I love a good craft beer while playing Dungeons and Dragons with my friends!</p>
                <p>Below are some of the technologies I have been working with most recently.</p>
                <div className={styles.ulGrid}>
                  <div>
                    <ul>
                      <li>TypeScript</li>
                      <li>Vue.js</li>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Jest</li>
                      <li>SCSS</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Docker</li>
                      <li>JavaScript</li>
                      <li>VS Code</li>
                      <li>Design Systems</li>
                      <li>Git Lab</li>
                      <li>Storybook.js</li>
                    </ul>
                  </div>
                </div>
              
              </div>
              <div className={styles.item}>
                <div className={styles.profilePicWrapper}>
                  <Image src={profilePic} alt="Picture of me, Robert Kregloh" layout="responsive" />
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
