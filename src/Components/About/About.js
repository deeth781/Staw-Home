import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className="section" id="about">
      <header className="section__heading">
        <p className="section__desc">My info</p>
        <h2 className="section__title">About Me</h2>
      </header>
      <div className={styles.wrap}>
        <p className={styles.content}>
        Hi, my name is Tài, but you can call me (Staw🐿️)! I'm 14 years old and aspiring to become a developer. 
        I have a passion for gaming and love spending my free time having fun and making friends. 
        I'm always curious about technology and enjoy learning new skills to create cool things. 
        Oh, and I might have a bit of a playful side when it comes to chatting with girls too! 😑
        </p>
        <a href="#contact" className={styles.btn__contact}>
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default About;
