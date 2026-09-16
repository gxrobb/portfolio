import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <p>Oh, Hello there! My name is</p>
        <h1>ROBERT KREGLOH</h1>
        <h3>
          And I like to build <span className={styles.highlight}>useful</span>{' '}
          things!
        </h3>
        <p>
          I am a{' '}
          <span className={styles.highlight}>
            Senior Front-End Web Developer
          </span>{' '}
          who has a passion for graphic and interaction design.
        </p>
        <a className="button" href="mailto:gxrobb@gmail.com">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
