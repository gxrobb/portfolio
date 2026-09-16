import { useState } from 'react';
import PageHead from '@/components/common/PageHead';
import { AboutSection } from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import SideIcons from '@/components/layout/SideIcons';
import { LIST_OF_EMPLOYERS } from '@/constants/jobs';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/constants/site';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  const [activeEmployer, setActiveEmployer] = useState(LIST_OF_EMPLOYERS[0]);

  return (
    <>
      <PageHead title={SITE_TITLE} description={SITE_DESCRIPTION} path="/" />
      <SideIcons />
      <Navigation />

      <main className={styles.main}>
        <Hero />
        <AboutSection />
        <ExperienceSection
          activeEmployer={activeEmployer}
          setActiveEmployer={setActiveEmployer}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
