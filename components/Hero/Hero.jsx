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
  const fullText = "Your Brand. Powered by Technology.";
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
              {displayedText.split("Powered by Technology")[0]}
              <span>
                {displayedText.includes("Powered by Technology")
                  ? "Powered by Technology"
                  : ""}
              </span>
            </h1>
            <p>
              At CoxaTech, we craft the future of online branding — from
              stunning websites and apps to smart AI automation, social media
              growth, and creative content that moves audiences.
            </p>
            <div className={styles.cta}>
              {/* ✅ Trigger popup instead of Link */}
              <button
                className={styles.primaryBtn}
                onClick={() => setHireMeOpen(true)}
              >
                WORK WITH US
              </button>

              <button className={styles.secondaryBtn}>
                <a href="/cv.pdf" download className={styles.downloadBtn}>
                  OUR INSTAGRAM
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
            <video
              src="/header-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={styles.heroVideo}
              width={600}
              height={600}
              buffered="auto"
              
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
