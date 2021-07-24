import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import profilePic from '../public/images/me.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robert Kregloh&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.socialIcons}>
        <ul>
          <li><div className={styles.line}></div></li>
          <li><i className="fab fa-linkedin-in"></i></li>
          <li><i className="fab fa-github"></i></li>
          <li><i className="fas fa-envelope"></i></li>
        </ul>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>About Me</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
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
            <button>Get In Touch</button>
          </div>
        </section> 
        
        <section className={`${styles.copySection} ${styles.aboutMe} container`}>
            <div className={styles.title}>
              <h2>About Me</h2>
            </div>
            <div className={styles.copyGrid}>
              <div className={styles.item}>
                <p>Welcome to my portfolio! Like I mentioned above, my name is Robert, I tend to go by Robb. I started developing for the web when I was only 12 years old. As soon as I got my own computer (after much pestering!) I fell in love with creating and designing for the web.</p>
                <p>I started developing for the web professionally in 2015 and have not stopped creating beautiful, useful and intuitive websites and interfaces since!</p>
                <p>Here is a short list of technologies I currently use daily.</p>
                <div className={styles.ulGrid}>
                  <div>
                    <ul>
                      <li>JavaScript</li>
                      <li>Next.js</li>
                      <li>Vue.js</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Docker</li>
                      <li>React</li>
                      <li>Netlify</li>
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

        <section className={`${styles.copySection} ${styles.experience} container`}>
          <div className={styles.title}>
            <h2>Places I've Worked At</h2>
          </div>
          <div className={styles.experienceGrid}>
            <div className={styles.employer}>
              <ul>
                <li className={styles.active}>Pool.Garden</li>
                <li>Firewalls.com</li>
                <li>BitLoft</li>
                <li>4Media</li>
                <li>JC Marketing</li>
              </ul>
            </div>
            <div className={styles.employerDescription}>
              <h3>Front-End Developer @ Pool.Garden</h3>
              <h4>May 2021 - Present</h4>
              <ul>
                <li>I work with the Back-End developer to deliver a service for cryptocurrency miners to combine their efforts in a pool.</li>
                <li>Responsibilities include maintaining the front end codebase, adding new features and designing any features or elements as they are needed.</li>
                <li>Some of the skills I use in this position include NextJS, SASS, HTML.</li>
              </ul>
            </div>
          </div>
        </section>


        <section className={`${styles.copySection} ${styles.experience} container`}>
          <div className={styles.title}>
            <h2>Some of my projects</h2>
          </div>
        </section>

      </main>
      
    </div>
  )
}
