import { useState } from 'react';
import Section from '@/components/common/Section';
import EmployerDescription from './EmployerDescription';
import { EmployerList, getEmployerTabId } from './EmployerList';
import type { Employer } from '@/constants/jobs';
import styles from './ExperienceSection.module.scss';

interface ExperienceSectionProps {
  id: string;
  title: string;
  /** Accessible name for the tab list. */
  label: string;
  employers: Employer[];
}

export default function ExperienceSection({
  id,
  title,
  label,
  employers,
}: ExperienceSectionProps) {
  const [activeEmployer, setActiveEmployer] = useState(employers[0]);
  const panelId = `${id}-panel`;

  return (
    <Section id={id} title={title}>
      <div className={styles.grid}>
        <div>
          <EmployerList
            label={label}
            panelId={panelId}
            employers={employers}
            activeEmployer={activeEmployer}
            onEmployerSelect={setActiveEmployer}
          />
        </div>
        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={getEmployerTabId(panelId, activeEmployer)}
          tabIndex={0}
        >
          <EmployerDescription employer={activeEmployer} />
        </div>
      </div>
    </Section>
  );
}
