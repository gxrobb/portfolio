import { skillsList } from '../constants/skills.js'
import styles from '../styles/Home.module.scss'

 export function SkillsGrid() {
    return (
      <div className={styles.ulGrid}>
        {skillsList.map((skillGroup) => (
          <div key={skillGroup.id}>
            <ul>
              {skillGroup.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }