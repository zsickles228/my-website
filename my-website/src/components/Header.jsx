import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Zach Sickles</h1>
      <p>AI Engineer</p>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    padding: '4rem 1rem',
    backgroundColor: '#282c34',
    color: 'white',
  },
};

export default Header;