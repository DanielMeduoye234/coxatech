"use client";

import React, { useState, useEffect } from "react";
import styles from "../Hero/Hero.module.css";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import HireMe from "../Hire/HireMe"; // ✅ import HireMe

const Hero = () => {
  const [hireMeOpen, setHireMeOpen] = useState(false); // state for popup
  const shouldReduceMotion = useReducedMotion();

  // Float animation
  const animateFloat = shouldReduceMotion ? { y: 0 } : { y: [0, -16, 0] };
  const floatTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" };

  // Typing effect
  const fullText = "Hi, I’m Daniel Meduoye";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left Text */}
          <div className={styles.text}>
            <h1>
              {displayedText.split("Daniel Meduoye")[0]}
              <span>
                {displayedText.includes("Daniel Meduoye")
                  ? "Daniel Meduoye"
                  : ""}
              </span>
            </h1>
            <p>
              A passionate <strong>Digital Marketer & Web Developer</strong>{" "}
              with 5+ years of experience building high-performance websites in
              WordPress, Shopify, and Next.js.
            </p>
            <div className={styles.cta}>
              {/* ✅ Trigger popup instead of Link */}
              <button
                className={styles.primaryBtn}
                onClick={() => setHireMeOpen(true)}
              >
                Hire Me
              </button>

              <button className={styles.secondaryBtn}>
                <a href="/cv.pdf" download className={styles.downloadBtn}>
                  DOWNLOAD CV
                </a>
              </button>
            </div>
          </div>

          {/* Right Floating Image */}
          <motion.div
            className={styles.heroImg}
            animate={animateFloat}
            transition={floatTransition}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          >
            <Image
              src="/header-img.png"
              alt="Daniel Meduoye"
              width={550}
              height={550}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* ✅ Popup rendered here */}
      <HireMe open={hireMeOpen} setOpen={setHireMeOpen} />
    </section>
  );
};

export default Hero;
