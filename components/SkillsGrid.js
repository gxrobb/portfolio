import { skillsList } from '../constants/skills.js'
import styles from '../styles/Home.module.scss'

 export function SkillsGrid() {
    return (
      <div className={styles.ulGrid}>
        {skillsList.map((skillColumn) => (
          <div key={skillColumn.id}>
            <ul>
              {skillColumn.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }