// src/components/Skills.jsx
import React from 'react';
import styles from './Skills.module.css'; // Import the CSS module

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>

        {/* Technical Skills Category */}
        <div className={styles.skillCategory}>
          <h3>💻 Technical Skills</h3>
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
            <li><strong>Framework/Library:</strong> React.js (Beginner to Intermediate)</li>
            <li><strong>CSS Framework:</strong> Tailwind CSS (Learning In-depth)</li>
            <li><strong>Concepts:</strong> Responsive Design, UI Development</li>
          </ul>
        </div>

        {/* Backend & Full-Stack Category */}
        <div className={styles.skillCategory}>
          <h3>⚙️ Backend & Full-Stack</h3>
          <ul>
            <li><strong>Backend:</strong> Basic Node.js Understanding</li>
            <li><strong>Concepts:</strong> Learning Full-Stack Principles</li>
          </ul>
        </div>

        {/* Programming Fundamentals Category */}
        <div className={styles.skillCategory}>
          <h3>🧠 Programming Fundamentals</h3>
          <ul>
            <li><strong>Core CS:</strong> Data Structures & Algorithms (DSA - Learning for Placements)</li>
            <li><strong>Design:</strong> System Design (Beginner - Learning for Placements)</li>
          </ul>
        </div>

        {/* Version Control & Tools Category */}
        <div className={styles.skillCategory}>
          <h3>🔧 Version Control & Tools</h3>
          <ul>
            <li><strong>Version Control:</strong> Git & GitHub (Basic Usage)</li>
            <li><strong>Editors/IDEs:</strong> Visual Studio Code</li>
            <li><strong>Other Tools:</strong> Jupyter Notebook (Cybersecurity Process Mining Project)</li>
          </ul>
        </div>

       

      </div> {/* End skillsContainer */}
    </section>
  );
}

export default Skills;