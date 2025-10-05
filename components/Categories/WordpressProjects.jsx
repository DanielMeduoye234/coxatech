import React from "react";
import styles from "../Categories/project.module.css";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const WordpressProjects = ({ projects }) => {
  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {projects.length === 0 ? (
          <p>No WordPress projects found.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className={styles.card}>
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                />
              )}
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <Link href={project.link} target="_blank">
                  View Project →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const projects = await client.fetch(
    `*[_type == "project" && category->slug.current == "wordpress"]{
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
    revalidate: 60, // regenerate the page at most once every 60 seconds
  };
}

export default WordpressProjects;
