import Section from '@/components/common/Section';
import EmployerDescription from './EmployerDescription';
import {
  EMPLOYER_PANEL_ID,
  EmployerList,
  getEmployerTabId,
} from './EmployerList';
import { LIST_OF_EMPLOYERS, type Employer } from '@/constants/jobs';
import styles from './ExperienceSection.module.scss';

interface ExperienceSectionProps {
  activeEmployer: Employer;
  setActiveEmployer: (employer: Employer) => void;
}

export default function ExperienceSection({
  activeEmployer,
  setActiveEmployer,
}: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Places I've Worked">
      <div className={styles.grid}>
        <div>
          <EmployerList
            employers={LIST_OF_EMPLOYERS}
            activeEmployer={activeEmployer}
            onEmployerSelect={setActiveEmployer}
          />
        </div>
        <div
          role="tabpanel"
          id={EMPLOYER_PANEL_ID}
          aria-labelledby={getEmployerTabId(activeEmployer)}
          tabIndex={0}
        >
          <EmployerDescription employer={activeEmployer} />
        </div>
      </div>
    </Section>
  );
}
