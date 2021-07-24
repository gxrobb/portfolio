import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.scss'
export default function ProjectCard({ imgUrl, stackList, logoCopy, projectLink }) {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}>
            <Image src={imgUrl} alt="launcher id location in GUI" width={400} height={200} />
        </div>
        <div className={styles.underCard}>
            <p><Image src="/images/bulletPoint.svg" alt="launcher id location in GUI" width={10} height={10} className={styles.bulletIcon} /> <span>{stackList}</span> </p>
        </div>
    </div>
  );
}