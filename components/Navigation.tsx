import styles from '../styles/Home.module.scss'
export default function Navigation () {

  return (
    <nav className={styles.navigation}>
      <ul>
        <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="/resume.pdf">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><div className={styles.line}></div></li>
        </ul>
      </nav>
  )
}