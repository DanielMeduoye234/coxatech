import React from "react";
import styles from "../Categories/project.module.css";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const NextjsProjects = ({ projects }) => {
  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className={styles.card}>
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#fff" }}>
            No Next.js projects available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

// Fetch data at build time and enable ISR
export async function getStaticProps() {
  const projects = await client.fetch(
    `*[_type == "project" && category->slug.current == "nextjs"]{
      _id,
      title,
      link,
      "imageUrl": image.asset->url
    }`
  );

  return {
    props: {
      projects,
    },
    revalidate: 60, // regenerate page every 60 seconds
  };
}

export default NextjsProjects;
