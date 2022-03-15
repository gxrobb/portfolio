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
      label: 'Datica.com',
      title: 'Front-End Developer @ Datica.com',
      date: 'August 2021 - Present',
      description: [
      'I work specifically with VueJS 2, along with plugins such as Vuetify Framework and VueFormulate. I helped flush out existing UI and developed a new UI for the current SaaS product.',
      'The majority of the work consists of integrating an API and allowing users to manage their cloud compliance and their CI/CD pipelines. I worked with a team of back end developers to implement their api into my new UI.',   
      'Some of the skills I used in this position include, Docker, Vue2, LESS, SASS, HTML, AWS, Git Lab and Adobe Suite'
      ]
    },
    {
        id: 2,
        label: 'Firewalls.com',
        title: 'Senior Front-End Developer @ Firewalls.com',
        date: 'August 2019 - August 2021',
        description: [
        'I developed on Magento 2, Wordpress and Laravel 8 to maintain an online firewall reseller website. In addition to development, I also assisted the marketing team with the ocasional web banner.',
        'Responsibilities included managing 3 other developers, deploying code bi-weekly via Bitbucket Pipelines and maintaining the internal API.',   
        'Some of the skills I used in this position included PHP, Laravel, Magent 2 (Zend Framework), Vue3, LESS, SASS, HTML.'
        ]
    },
    {
      id: 3,
      label: 'Pool.Garden',
      title: 'Front-End Developer @ Pool.Garden',
      date: 'May 2021 - August 2021',
      description: [
      'I worked with a DevOps/Back-End developer in order to maintain and administer a Chia (XCH) mining pool.',
      'Responsibilities included maintaining the front end codebase, adding new features and designing any features or elements as they are needed. This project will be going offline shortly.',   
      'Some of the skills I use in this position include NextJS, SASS, HTML.'
      ]
    },
    {
      id: 4,
      label: 'BitLoft',
      title: 'Front-End Developer @ BitLoft',
      date: 'August 2016 - August 2019',
      description: [
      'While at BitLoft, I wore various hats. Working at a startup, I had the pleasure of working on both Front-End and Back-End projects. The majority of my time was spent designing and developing for internal projects as well as agency clients. I also had the chance to expand my skills in some marketing and technology related areas.',
      'I worked on projects ranging from small wordpress sites to large Laravel SaaS apps. I also assited the marketing director with planning in-person events at conventions, assisted the esports director on various events and projects ranging from configuring television monitors to display ads and create video tralers for upcoming competitions.',   
      'Some of the web specific skills I used during my time at BitLoft include Laravel 5, PHP, CSS, SASS, LESS, JavaScript, jQuery, MySQL, Google Cloude Platform, Design and Print Design.'
      ]
    },
    {
      id: 5,
      label: '4 Media',
      title: 'Web Designer @ 4 Media',
      date: 'February 2015 - May 2016',
      description: [
      'While at 4 Media I created over 50 bootstrap websites for various different clients. I also created landing pages which required a bit of JavaScript and marketing magic.',
      'My responsibilities ranged from graphic design to quick turn over web design and development for fast-paced clients.',   
      'Some of the skills I use in this position include PHP, CSS, LESS, Twitter Bootstrap, jQuery, JavaScript.'
      ]
    },
    {
      id: 6,
      label: 'JCMarketing',
      title: 'Graphic Designer @ JCMarketing',
      date: 'July 2014 - August 2016',
      description: [
      'At JCMarketing, I created web banners, small websites and social media graphics.',
      'The majority of the work for this client was graphic design related with some html/css fixes peppered in.',   
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
                <p>I am a Front-End Developer who works mainly with Next.js (React) and Vue.js. I am adept at building custom web solutions involving JavaScipt, HTML and CSS. I have also been known to dabble with Back End, DevOps, and even write a MySQL query every now and then!</p>
                <p>I started developing for the web professionally in 2015 and have not stopped creating beautiful, useful and intuitive websites and interfaces since! I am what you would call a &ldquo;User Defender&ldquo; when it comes to UX. I love making painless designs that just plain work!</p>
                <p>Some of my hobbies include watching movies, playing video games, tinkering with new technology, painting miniatures and playing Dungeons & Dragons!</p>
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
            <ProjectCard imgUrl={'/images/poolgarden.png'} stackList={'Next.js, SASS, Design'} logoCopy={'Pool.Garden'} projectLink={'/images/pgfull.png'} shortDescription={'Chia Cryptocurrency Mining Pool.'} />
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
