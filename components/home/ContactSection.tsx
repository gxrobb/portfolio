import Section from '@/components/common/Section';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <Section id="contact" title="Contact" centeredTitle>
      <div className={styles.wrapper}>
        <p>
          If you have any questions, or just want to say hi, feel free to shoot
          me an email! Click the button below to launch your preferred email
          client!
        </p>
        <a className="button" href="mailto:gxrobb@gmail.com">
          Email Me
        </a>
      </div>
    </Section>
  );
}
