import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.scss'
export default function ProjectCard({ imgUrl, stackList, logoCopy, projectLink, shortDescription }) {
  return (
    <div className={styles.cardWrapper}>
        <h3><a href={projectLink} rel="noreferrer noopener">{logoCopy}</a></h3>
        <p>{shortDescription}</p>
        <div className={styles.imageWrapper}>
           <a href={projectLink} rel="noreferrer noopener"><Image src={imgUrl} alt="launcher id location in GUI" className={styles.faded} width={400} height={200} /></a>
        </div>
        <div className={styles.underCard}>
            <p><Image src="/images/bulletPoint.svg" alt="launcher id location in GUI" width={10} height={10} className={styles.bulletIcon} /> <span>{stackList}</span> </p>
        </div>
    </div>
  );
}
