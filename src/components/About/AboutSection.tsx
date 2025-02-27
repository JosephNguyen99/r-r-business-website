import React from 'react';
import Link from 'next/link';
import styles from './AboutSection.module.css'; // Import the CSS module
// import '../../styles/index.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.summarySection}>
      <h2>About Our Business</h2>
      <p>
        Welcome to our business! We specialize in providing top-notch services and products to our customers. Our mission is to deliver quality and excellence in everything we do.
      </p>
        <Link
            href="/about"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
            More About Us
        </Link>
    </section>
  );
};

export default AboutSection;