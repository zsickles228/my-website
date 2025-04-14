import React from 'react';

const projects = [
  {
    title: 'My Portfolio Website',
    description: 'A React-based portfolio showcasing my work and skills.',
    project_link: 'https://zach-sickles.com/',
    github_link: 'https://github.com/zsickles228/my-website'
  },
  {
    title: 'Weather App',
    description: 'A weather app using OpenWeatherMap API and React Hooks.',
    project_link: '#',
    github_link: '#',
  },
];

const Projects = () => {
  return (
    <section style={styles.section}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={styles.card}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.project_link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <br></br>
          <br></br>
          <a href={project.github_link} target="_blank" rel="noopener noreferrer">
            View Github
          </a>
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
};

export default Projects;