import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ExperienceSection from '../components/ExperienceSection.js'
import { LIST_OF_EMPLOYERS } from '../constants/jobs.js'
import { AboutSection } from '../components/AboutSection.js'
import SideIcons from '../components/SideIcons.js'
import Navigation from '../components/Navigation.js'


export default function Home() { 

  const [activeEmployer, setActiveEmployer] = useState(LIST_OF_EMPLOYERS[0]);
    
  return (
    <>
      <Head>
        <title>Robert Kregloh&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideIcons />
      <Navigation />

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

        <AboutSection />

        <ExperienceSection 
          activeEmployer={activeEmployer} 
          setActiveEmployer={setActiveEmployer} 
        />
        

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
