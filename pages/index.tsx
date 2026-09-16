import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import PageHead from '../components/PageHead';
import ExperienceSection from '../components/ExperienceSection';
import { LIST_OF_EMPLOYERS } from '../constants/jobs';
import { AboutSection } from '../components/AboutSection';
import SideIcons from '../components/SideIcons';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import { SITE_DESCRIPTION, SITE_TITLE } from '../constants/site';

export default function Home() {
  const [activeEmployer, setActiveEmployer] = useState(LIST_OF_EMPLOYERS[0]);

  return (
    <>
      <PageHead title={SITE_TITLE} description={SITE_DESCRIPTION} path="/" />
      <SideIcons />
      <Navigation />

      <main className={styles.main}>
        <section className="container">
          <div className={styles.heroWrapper}>
            <p>Oh, Hello there! My name is</p>
            <h1>ROBERT KREGLOH</h1>
            <h3>
              And I like to build{' '}
              <span className={styles.highlight}>useful</span> things!
            </h3>
            <p>
              I am a{' '}
              <span className={styles.highlight}>
                Senior Front-End Web Developer
              </span>{' '}
              who has a passion for graphic and interaction design.
            </p>
            <a className="button" href="mailto:gxrobb@gmail.com">
              Get In Touch
            </a>
          </div>
        </section>

        <AboutSection />

        <ExperienceSection
          activeEmployer={activeEmployer}
          setActiveEmployer={setActiveEmployer}
        />

        <ContactSection />
      </main>
      <footer className={styles.footer}>
        <p>Designed And Developed By Robert Kregloh | Deployed On Netlify!</p>
      </footer>
    </>
  );
}
