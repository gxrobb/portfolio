import profilePic from '../public/images/me.jpg';
import Image from 'next/image';
import { SkillsGrid } from '../components/SkillsGrid.js';
import styles from '../styles/Home.module.scss';

export function AboutSection() {
  return (
    <>
      <div id="about" />
      <section className={`${styles.copySection} ${styles.aboutMe} container`}>
        <div className={styles.title}>
          <h2>About Me</h2>
        </div>
        <div className={styles.copyGrid}>
          <div className={styles.item}>
            <p>
              I am a Front-End Developer based in Indiana. I started developing
              for the web professionally in 2015 and have not stopped creating
              beautiful, useful and intuitive websites since! I heard a term
              once in a podcast that I feel describes my passion, a “User
              Defender”. Usability is always at the forefront of anything I
              design or build. I love creating great designs that just plain
              work!
            </p>
            <p>
              Some of my hobbies include spending time with my family, tinkering
              with new technology, video games, painting miniature figures and I
              love a good craft beer while playing Dungeons and Dragons with my
              friends!
            </p>
            <p>
              Below are some of the technologies I have been working with most
              recently.
            </p>
            <SkillsGrid />
          </div>
          <div className={styles.item}>
            <div className={styles.profilePicWrapper}>
              <Image
                src={profilePic}
                alt="Picture of me, Robert Kregloh"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
