import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import ExperienceSection from '../components/ExperienceSection';
import { LIST_OF_EMPLOYERS } from '../constants/jobs';
import { AboutSection } from '../components/AboutSection';
import SideIcons from '../components/SideIcons';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';
import {
  SHARE_IMAGE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '../constants/site';

export default function Home() {
  const [activeEmployer, setActiveEmployer] = useState(LIST_OF_EMPLOYERS[0]);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={SHARE_IMAGE.url} />
        <meta property="og:image:width" content={String(SHARE_IMAGE.width)} />
        <meta property="og:image:height" content={String(SHARE_IMAGE.height)} />
        <meta property="og:image:alt" content={SHARE_IMAGE.alt} />
        <meta name="twitter:card" content="summary" />
      </Head>
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
