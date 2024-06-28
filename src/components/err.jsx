
import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.text}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p style={styles.text}>Go back to <a href="/">Homepage</a>.</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  }
};

export default NotFoundPage;
