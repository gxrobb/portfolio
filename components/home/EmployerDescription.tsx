import type { Employer } from '@/constants/jobs';
import styles from './EmployerDescription.module.scss';

export default function EmployerDescription({
  employer,
}: {
  employer: Employer;
}) {
  return (
    <>
      <h3 className={styles.title}>{employer.title}</h3>
      <h4 className={styles.date}>{employer.date}</h4>
      <ul className={styles.list}>
        {employer.description.map(value => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </>
  );
}
