"use client";

import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        {/* ✅ Logo */}
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

        {/* ✅ Desktop Navigation */}
        <div className={styles.navlinks}>
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
            
            <li className={styles.navbtn}>
              <a href="/cv.pdf" download className={styles.downloadBtn}>
                Download Brochure
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Hamburger for Mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBars size={24} />
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.mobileHeader}>
          <Image src="/logo.png" alt="Logo" width={100} height={35} />
          <FaTimes
            className={styles.closeIcon}
            size={24}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
        <ul>
          <li>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/wordpress" onClick={() => setIsMobileMenuOpen(false)}>
              WordPress
            </Link>
          </li>
          <li>
            <Link href="/next" onClick={() => setIsMobileMenuOpen(false)}>
              Next.js / React.js
            </Link>
          </li>
         
          <li className={styles.navbtn}>
            <a
              href="/cv.pdf"
              download
              className={styles.downloadBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Brochure
            </a>
          </li>
        </ul>
      </div>

      {/* ✅ Hire Me Popup */}
      {showForm && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Hire Me Form</h3>
            <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
