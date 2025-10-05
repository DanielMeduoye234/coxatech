"use client";
import { useState } from "react";
import styles from "./floating.module.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaComments } from "react-icons/fa";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.floatingWrapper}>
      {/* Contact Options */}
      <div
        className={`${styles.contactOptions} ${open ? styles.show : ""}`}
      >
        <a
          href="https://wa.me/2349167560387"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.option}
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:danielmeduoye@gmail.com"
          className={styles.option}
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+2347013468525"
          className={styles.option}
          aria-label="Phone"
        >
          <FaPhoneAlt />
        </a>
      </div>

      {/* Main Floating Button */}
      <button
        className={`${styles.floatingBtn} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle contact options"
      >
        <FaComments />
      </button>
    </div>
  );
}
