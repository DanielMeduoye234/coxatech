"use client";

import React from "react";
import styles from "../Expertise/Expertise.module.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const expertiseData = [
  {
    title: "WordPress Development",
    img: "/wordpress.jpg",
    link: "/wordpress", // 🔗 page route
  },
  {
    title: "Shopify Liquid Development",
    img: "/shop.jpg",
    link: "/shop",
  },
  {
    title: "Next.js / React Development",
    img: "/next.jpg",
    link: "/next",
  },
  {
    title: "Graphics Design",
    img: "/graphics.jpg",
    link: "",
  },
];

const Expertise = () => {
  return (
    <section className={styles.expertise}>
      <div className={styles.container}>
        {expertiseData.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.img} alt={item.title} className={styles.cardImg} />
            <div className={styles.overlay}></div>
            <h3 className={styles.cardTitle}>{item.title}</h3>

            {/* ✅ Wrap icon with Link */}
            <Link href={item.link} className={styles.icon}>
              <ArrowUpRight size={24} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
