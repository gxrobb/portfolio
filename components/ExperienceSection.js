import styles from '../styles/Home.module.scss';
import EmployerDescription from './EmployerDescription.js';
import { EmployerList } from './EmployerList.js';
import { LIST_OF_EMPLOYERS } from '../constants/jobs.js';
export default function ExperienceSection({
  activeEmployer,
  setActiveEmployer,
}) {
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
            <ul>
              <EmployerList
                employers={LIST_OF_EMPLOYERS}
                activeEmployer={activeEmployer}
                onEmployerSelect={setActiveEmployer}
              />
            </ul>
          </div>
          <div className={styles.employerDescription}>
            <EmployerDescription employer={activeEmployer} />
          </div>
        </div>
      </section>
    </>
  );
}
