import styles from '../styles/Home.module.scss';
import type { Employer } from '../constants/jobs';

interface EmployerListProps {
  employers: Employer[];
  activeEmployer: Employer;
  onEmployerSelect: (employer: Employer) => void;
}

export function EmployerList({
  employers,
  activeEmployer,
  onEmployerSelect,
}: EmployerListProps) {
  return (
    <>
      {employers.map(employer => (
        <li
          onClick={() => onEmployerSelect(employer)}
          className={
            activeEmployer.id === employer.id ? styles.active : undefined
          }
          key={employer.id}
        >
          {employer.label}
        </li>
      ))}
    </>
  );
}
