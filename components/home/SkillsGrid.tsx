import { skillsList } from '@/constants/skills';
import styles from './SkillsGrid.module.scss';

export function SkillsGrid() {
  return (
    <div className={styles.grid}>
      {skillsList.map(skillColumn => (
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
