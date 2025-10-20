import React from "react";
import styles from "../About/About.module.css";
import Image from "next/image";
import {
  FaReact,
  FaWordpress,
  FaShopify,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Left Text */}
          <div className={styles.left}>
            <h1>About Usx</h1>
            <p>
              CoxaTech is a forward-thinking online branding and technology
              company built for the digital age. We specialize in creating
              innovative, high-performing solutions that help businesses grow,
              stand out, and stay ahead in a fast-changing world. From website
              and app development to video editing, social media management, and
              AI-driven automation, we bring creativity and technology together
              to deliver measurable results. Our Mission
            </p>
            <p>
              Beyond coding, I’m always exploring new technologies, contributing
              to open-source, and pushing myself to deliver digital experiences
              that truly make an impact. Let’s build something amazing together!
            </p>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              <h3>Tech Stack</h3>
              <div className={styles.icons}>
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <FaJsSquare title="JavaScript" />
                <FaReact title="React" />
                <SiNextdotjs title="Next.js" />
                <SiTailwindcss title="TailwindCSS" />
                <FaWordpress title="WordPress" />
                <FaShopify title="Shopify" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.right}>
            {/* Experience */}
            <h2>Experience</h2>
            <div className={styles.experience}>
              <div className={styles.expBox}>
                <h3>5+ Years</h3>
                <p>Web Development</p>
              </div>
              <div className={styles.expBox}>
                <h3>50+ Projects</h3>
                <p>Completed Successfully</p>
              </div>
              <div className={styles.expBox}>
                <h3>WordPress, Shopify, Next.js</h3>
                <p>Core Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
