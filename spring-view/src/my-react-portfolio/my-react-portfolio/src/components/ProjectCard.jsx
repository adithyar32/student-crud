import React from 'react';
import styles from './ProjectCard.module.css';

// This component receives project data as props
function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={`${title} screenshot`} className={styles.cardImage} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;