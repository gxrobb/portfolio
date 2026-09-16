import styles from '@/styles/Home.module.scss';
import EmployerDescription from './EmployerDescription';
import {
  EMPLOYER_PANEL_ID,
  EmployerList,
  getEmployerTabId,
} from './EmployerList';
import { LIST_OF_EMPLOYERS, type Employer } from '@/constants/jobs';

interface ExperienceSectionProps {
  activeEmployer: Employer;
  setActiveEmployer: (employer: Employer) => void;
}

export default function ExperienceSection({
  activeEmployer,
  setActiveEmployer,
}: ExperienceSectionProps) {
  return (
    <>
      <div id="experience" />
      <section
        className={`${styles.copySection} ${styles.experience} container`}
      >
        <div className={styles.title}>
          <h2>Places I&apos;ve Worked</h2>
        </div>
        <div className={styles.experienceGrid}>
          <div className={styles.employer}>
            <ul role="tablist" aria-label="Employers">
              <EmployerList
                employers={LIST_OF_EMPLOYERS}
                activeEmployer={activeEmployer}
                onEmployerSelect={setActiveEmployer}
              />
            </ul>
          </div>
          <div
            className={styles.employerDescription}
            role="tabpanel"
            id={EMPLOYER_PANEL_ID}
            aria-labelledby={getEmployerTabId(activeEmployer)}
            tabIndex={0}
          >
            <EmployerDescription employer={activeEmployer} />
          </div>
        </div>
      </section>
    </>
  );
}
