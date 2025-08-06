import styles from '../styles/Home.module.scss'

export function EmployerList({ employers, activeEmployer, onEmployerSelect }) {
  return (
    <>
      {employers.map((employer) => (
        <li 
          onClick={() => onEmployerSelect(employer)}  
          className={activeEmployer.id === employer.id ? styles.active : null} 
          key={employer.id}
        > 
          {employer.label} 
        </li>
      ))}
    </>
  )
}
