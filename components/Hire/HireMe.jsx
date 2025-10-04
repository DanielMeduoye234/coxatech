"use client";

import React from "react";
import styles from "./hireme.module.css";
import { Mail, Phone, MessageCircle } from "lucide-react";

const HireMe = ({ open, setOpen }) => {
  if (!open) return null; // don’t render unless open

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Let’s Work Together 🚀</h2>
        <p>Choose how you’d like to reach me:</p>

        <div className={styles.icons}>
          <a href="mailto:danielmeduoye@gmail.com" className={styles.iconBtn}>
            <Mail size={28} />
            <span>Email</span>
          </a>
          <a
            href="https://wa.me/2347013468525"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
          >
            <MessageCircle size={28} />
            <span>WhatsApp</span>
          </a>
          <a href="tel:+2347013468525" className={styles.iconBtn}>
            <Phone size={28} />
            <span>Call</span>
          </a>
        </div>

        <button onClick={() => setOpen(false)} className={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default HireMe;
