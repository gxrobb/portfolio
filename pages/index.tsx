import PageHead from '@/components/common/PageHead';
import { AboutSection } from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import SideIcons from '@/components/layout/SideIcons';
import { LIST_OF_CONTRACTS, LIST_OF_EMPLOYERS } from '@/constants/jobs';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/constants/site';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <PageHead title={SITE_TITLE} description={SITE_DESCRIPTION} path="/" />
      <SideIcons />
      <Navigation />

      <main className={styles.main}>
        <Hero />
        <AboutSection />
        <ExperienceSection
          id="experience"
          title="Places I've Worked"
          label="Employers"
          employers={LIST_OF_EMPLOYERS}
        />
        <ExperienceSection
          id="contract-work"
          title="Contract Work"
          label="Contracts"
          employers={LIST_OF_CONTRACTS}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
