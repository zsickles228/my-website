import React from 'react';

const Contact = () => {
  return (
    <section style={styles.section}>
      <h2>Contact</h2>
      <p>Let's connect!</p>
      <ul>
        <li>Email: zsickles12@gmail.com</li>
        <li>LinkedIn: <a href="www.linkedin.com/in/zach-sickles-72264b203

">Zach Sickles</a></li>
        <li>GitHub: <a href="https://github.com/zsickles228">zsickles228</a></li>
      </ul>
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

export default Contact;