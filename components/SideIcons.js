import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.scss';

export default function SideIcons() {
  return (
    <div className={styles.socialIcons}>
      <ul>
        <li>
          <div className={styles.line}></div>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rkregloh/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://github.com/gxrobb" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:gxrobb@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
}
