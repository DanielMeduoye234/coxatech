"use client";

import React, { useState } from "react";
import styles from "../Footer/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import HireMe from "../Hire/HireMe";

const Footer = () => {
  const [hireMeOpen, setHireMeOpen] = useState(false);

  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footertext}>
          <h2>Let's Connect Here</h2>
        </div>
        <div className={styles.footerbtn}>
          {/* ✅ Open modal */}
          <button onClick={() => setHireMeOpen(true)}>Work With Us</button>
        </div>
      </div>
      <div className={styles.footerBtm}>
        <div className={styles.footerColum}>
          <div className={styles.col1}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/c.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  priority
                />
              </Link>
            </div>
            <p>
              Digital Presence Agency with years of Experience in building Brands online engaging websites,
              Shopify, and Next.js applications for clients worldwide. we are
              passionate about delivering high-quality, scalable solutions
              tailored to your business needs.
            </p>
          </div>
          <div className={styles.col2}>
            <h3 className={styles.footh3}>Navigation</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/wordpress">WordPress</Link>
              </li>
              <li>
                <Link href="/next">Next.js / React.js</Link>
              </li>
              <li>
                <Link href="/shop">Shopify</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col3}>
            <h3 className={styles.footh3}>Contact</h3>
            <p>+234 701 3468 525</p>
            <p>Info@coxatechai@gmail.com</p>
          </div>
          <div className={styles.col4}>
            <h3 className={styles.footh3}>Get in Touch</h3>
            <div className={styles.socials}>
              <a
                href="https://github.com/DanielMeduoye234"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-meduoye/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/Daniel93356687"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/coxatech/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup rendered here */}
      <HireMe open={hireMeOpen} setOpen={setHireMeOpen} />
    </div>
  );
};

export default Footer;
