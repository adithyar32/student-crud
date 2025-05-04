import React from 'react';
import ProjectCard from './ProjectCard'; // Import the card component
import styles from './Projects.module.css';

// --- Project Data ---
// Keep your project details here. Later, this could come from an API.
const projectsData = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'A brief description of your project. What problem does it solve? What technologies (React, Node.js, etc.) were used?',
    imageUrl: '/images/project1-placeholder.png', // Path relative to public folder
    link: '#', // Replace with actual link (GitHub, Live Demo)
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'Another project description. Highlight key features or your role in the project.',
    imageUrl: '/images/project2-placeholder.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'Built with XYZ framework, focusing on accessibility and performance. Solved the problem of ABC.',
    imageUrl: '/images/project3-placeholder.png',
    link: '#',
  },
  // Add more projects as needed
];
// --- End Project Data ---

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id} // Key prop is essential for lists in React
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl} // Pass the image URL
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;