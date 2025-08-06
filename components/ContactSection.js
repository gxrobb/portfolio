import styles from '../styles/Home.module.scss';

export default function ContactSection() {
  return (
    <>
      <div id="contact" />
      <section className={`${styles.copySection} ${styles.contact} container`}>
        <div className={styles.title}>
          <h2>Contact</h2>
        </div>
        <div className={styles.contactWrapper}>
          <p>
            If you have any questions, or just want to say hi, feel free to
            shoot me an email! Click the button below to launch your preferred
            email client!
          </p>
          <a href="mailto:gxrobb@gmail.com">
            <button>Email Me</button>
          </a>
        </div>
      </section>
    </>
  );
}
