import React from 'react';

const About = () => {
  return (
    <section style={styles.section}>
      <h2>About Me</h2>
      <p>
      I'm a passionate data science professional driven by innovation and a commitment to excellence. With a strong foundation from Brown University in Applied Mathematics and Computer Science, I specialize in developing cutting-edge AI solutions. In my current role at Citi, I design and refine AI-powered systems, including Conversational AI assistants and agentic architectures, leveraging advanced generative AI frameworks and best practices in machine learning and DevOps. I thrive on transforming complex challenges into elegant, user-friendly systems that push the boundaries of modern technology.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default About;