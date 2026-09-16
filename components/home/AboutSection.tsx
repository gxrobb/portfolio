import profilePic from '@/public/images/me.jpg';
import Image from 'next/image';
import Section from '@/components/common/Section';
import { SkillsGrid } from './SkillsGrid';
import styles from './AboutSection.module.scss';

export function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className={styles.grid}>
        <div className={styles.item}>
          <p>
            I am a Front-End Developer based in Indiana. I started developing
            for the web professionally in 2015 and have not stopped creating
            beautiful, useful and intuitive websites since! I heard a term once
            in a podcast that I feel describes my passion, a “User Defender”.
            Usability is always at the forefront of anything I design or build.
            I love creating great designs that just plain work!
          </p>
          <p>
            Some of my hobbies include spending time with my family, tinkering
            with new technology, video games, painting miniature figures and I
            love a good craft beer while playing Dungeons and Dragons with my
            friends!
          </p>
          <p>
            Below are some of the technologies and practices I have been working
            with most recently.
          </p>
          <SkillsGrid />
        </div>
        <div className={styles.item}>
          <div className={styles.photo}>
            <Image
              src={profilePic}
              alt="Picture of me, Robert Kregloh"
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
