import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import profilePic from '../public/images/me.jpg'
import ProjectCard from '../components/ProjectCard.js'
import EmployerDescription from '../components/EmployerDescription.js'

export default function Home() { 
  const jobList = [
    {
        id: 1,
        label: 'Pool.Garden',
        title: 'Front-End Developer @ Pool.Garden',
        date: 'May 2021 - Present',
        description: [
        'I work with the Back-End developer to deliver a service for cryptocurrency miners to combine their efforts in a pool.',
        'Responsibilities include maintaining the front end codebase, adding new features and designing any features or elements as they are needed.',   
        'Some of the skills I use in this position include NextJS, SASS, HTML.'
        ]
    },
    {
        id: 2,
        label: 'Firewalls.com',
        title: 'Senior Front-End Developer @ Firewalls.com',
        date: 'August 2019 - Present',
        description: [
        'I am currently developing on Magento 2, Wordpress and Laravel to maintain a online firewall reseller website. In addition to development, I also assist the marketing team with the ocasional web banner.',
        'Part of my responsabilities include managing 3 other developers, deploying code bi-weekly via Bitbucket Pipelines and maintaining the internal API.',   
        'Some of the skills I use in this position include PHP, Laravel, Magent 2 (Zend Framework), Vue3, LESS, SASS, HTML.'
        ]
    },
    {
      id: 3,
      label: 'BitLoft',
      title: 'Front-End Developer @ BitLoft',
      date: 'August 2016 - August 2019',
      description: [
      'While at BitLoft, I wore various hats, as a startup, I had the pleasure of working on both Front-End and Back-End projects. While the majority of my time was spent designing and developing for internal projects as well as agency clients, I also had a chance to expand my skills in some marketing and technology related areas.',
      'I worked on projects from small wordpress sites, to large laravel SaaS apps. I also assited the marketing director with planning in-person events at conventions, assisted the esports director on various events and projects ranging from configuring television monitors to display ads and create video tralers for upcoming competitions.',   
      'Some of the web specific skills I used during my time at BitLoft include Laravel 5, PHP, CSS, SASS, LESS, JavaScript, jQuery, MySQL, Google Cloude Platform, Design and Print Design.'
      ]
    },
    {
      id: 4,
      label: '4 Media',
      title: 'Web Designer @ 4 Media',
      date: 'February 2015 - May 2016',
      description: [
      'While at 4 Media, I spent most of my time honing my developer skills. I created over 100 bootstrap websites for various different vendors, small 1 page websites. I ocasionally got more complex projects like landing pages which required a bit of JavaScript.',
      'My responsibilities here ranged from graphic design, to quick turn over web design and development for fast paced clients.',   
      'Some of the skills I use in this position include PHP, CSS, LESS, Twitter Bootstrap, jQuery, JavaScript.'
      ]
    },
    {
      id: 5,
      label: 'JCMarketing',
      title: 'Graphic Designer @ JCMarketing',
      date: 'July 2014 - August 2016',
      description: [
      'At JCMarketing, I assisted the marketing director with graphic assets such as banners, buttons, magazine pages and things of that nature',
      'The majority of my work here consisted of graphical asset requests and a timely creation of the assets. Once in a while, I was asked to assist on some smaller web development projects.',   
      'Some of the skills I use in this position include Design, Photoshop, Illustrator, Indesign, HTML, CSS, jQuery, JavaScript'
      ]
    }
  ]


  const [activeEmployer, setActiveEmployer] = useState(jobList[0]);

  function ListAllTitles(data){
      return (
        <>
          {data.data.map((value) => {return <li onClick={ () => setActiveEmployer(value) }  className={activeEmployer.id == value.id ? styles.active : null} key="id"> {value.label} </li>})}
        </>
      )
    }
    
  return (
    <div>
      <Head>
        <title>Robert Kregloh&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.socialIcons}>
        <ul>
          <li><div className={styles.line}></div></li>
          <li><a href="https://www.linkedin.com/in/rkregloh/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://github.com/gxrobb" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="mailto:gxrobb@gmail.com"><i className="fas fa-envelope"></i></a></li>
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

        <div id="experience" />
        <section className={`${styles.copySection} ${styles.experience} container`}>
          <div className={styles.title}>
            <h2>Places I&apos;ve Worked At</h2>
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
            <ProjectCard imgUrl={'/images/poolgarden.png'} stackList={'Next.js, SASS, Design'} logoCopy={'Pool.Garden'} projectLink={'https://www.pool.garden'} shortDescription={'Chia Cryptocurrency Mining Pool.'} />
            <ProjectCard imgUrl={'/images/firewalls.png'} stackList={'Wordpress, SASS, PHP, Design'} logoCopy={'Firewalls.com'} projectLink={'https://www.firewalls.com'} shortDescription={'Firewalls Reseller Website.'} />
            <ProjectCard imgUrl={'/images/fwcblog.png'} stackList={'Magento 2, LESS, Docker, PHP, JS'} logoCopy={'Firewalls.com Blog'} projectLink={'https://www.firewalls.com/blog'} shortDescription={'Firewalls Blog.'} />
            <ProjectCard imgUrl={'/images/rpgipsum.png'} stackList={'Laravel, PHP, SASS, JavaScript'} logoCopy={'RPG Ipsum'} projectLink={'https://www.rpgipsum.com'} shortDescription={'Lorem Ipsum Generator.'} />
            <ProjectCard imgUrl={'/images/p1v3.jpg'} stackList={'Wordpress, PHP, SASS, Design, JS'} logoCopy={'Player One Esports'} projectLink={'https://www.playeroneesports.com'} shortDescription={'Esports Gaming Website.'} />
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
    </div>
  )
}
