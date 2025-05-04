import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>Welcome to My Portfolio</h1>
      <p>Showcasing my journey in web development & design.</p>
      {/* Optional Button: */}
      {/* <a href="#projects" className={styles.ctaButton}>View My Work</a> */}
    </section>
  );
}

export default Hero;