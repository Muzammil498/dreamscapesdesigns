import React, { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react";

import './App.css';

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  // ✅ Initial state for images visibility
  const initialImagesCount = 4;
  const interiorImages = [
    '/design3.jpg',
    '/design2.jpg',
    '/interior1.jpg',
    '/interior2.jpg',
    '/interior3.jpg',
    '/interior4.jpg',
    '/interior5.jpg',
    '/interior6.jpg',
    '/interior7.jpg',
    '/interior8.jpg',
    '/interior9.jpg',
    '/interior10.jpg',
  ];
  
  const exteriorImages = [
    '/design1.jpg',
    '/design4.jpg',
    '/exterior1.jpg',
    '/exterior2.jpg',
    '/exterior3.jpg',
    '/exterior4.jpg',
    '/exterior5.jpg',
    '/exterior6.jpg',
    '/exterior7.jpg',
    '/exterior8.jpg',
    '/exterior9.jpg',
    '/exterior10.jpg',
    '/exterior12.jpg',
    '/exterior13.jpg',
    '/exterior14.jpg',
    '/exterior15.jpg',
    '/exterior16.jpg',
    '/exterior17.jpg',
    '/exterior18.jpg',
    '/exterior19.jpg',
    '/exterior20.jpg',
  ];

  const [visibleInteriorImages, setVisibleInteriorImages] = useState(initialImagesCount);
  const [visibleExteriorImages, setVisibleExteriorImages] = useState(initialImagesCount);

  // ✅ Smooth Scrolling Function
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ Function to open the lightbox
  const openLightbox = (e, imgSrc) => {
    e.preventDefault();
    setLightboxImage(imgSrc);
  };

  // ✅ Function to close the lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // ✅ Load More Images for Interior
  const loadMoreInterior = () => {
    setVisibleInteriorImages((prev) => Math.min(prev + 4, interiorImages.length));
  };

  // ✅ Load Less Images for Interior
  const loadLessInterior = () => {
    setVisibleInteriorImages(initialImagesCount);
  };

  // ✅ Load More Images for Exterior
  const loadMoreExterior = () => {
    setVisibleExteriorImages((prev) => Math.min(prev + 4, exteriorImages.length));
  };

  // ✅ Load Less Images for Exterior
  const loadLessExterior = () => {
    setVisibleExteriorImages(initialImagesCount);
  };

  // ✅ Auto fade-in animation on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const revealSection = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add('fade-in');
        }
      });
    };
    window.addEventListener('scroll', revealSection);
    revealSection();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img src="/logo3.png" alt="Company Logo" className="logo" />
        <nav>
          <a onClick={() => handleScroll('about')}>About Us</a>
          <a onClick={() => handleScroll('works')}>Our Works</a>
          <a onClick={() => handleScroll('contact')}>Contact Us</a>
        </nav>
      </header>
      
      <Analytics />  {/* Add this here */}

      {/* 🚀🔥 ABOUT US SECTION */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <div className="about-cards">
          <div className="about-card">
            <h3>Interior Design</h3>
            <p>We design luxurious interiors to enhance your living and working spaces.</p>
          </div>
          <div className="about-card">
            <h3>Exterior Design</h3>
            <p>We create stunning exteriors for commercial and residential spaces.</p>
          </div>
          <div className="about-card">
            <h3>Planning</h3>
            <p>Detailed project planning to ensure smooth construction and delivery.</p>
          </div>
          <div className="about-card">
            <h3>Consultancy</h3>
            <p>Professional consultancy services for your civil engineering projects.</p>
          </div>
        </div>
      </section>

      {/* 🚀🔥 OUR WORKS SECTION */}
      <section id="works" className="section">
        <h2>Our Works</h2>

        {/* ✅ Interior Design */}
        <h3>Interior Designs</h3>
        <div className="work-gallery">
          {interiorImages.slice(0, visibleInteriorImages).map((imgSrc, index) => (
            <div className="work-item" key={index} onClick={(e) => openLightbox(e, imgSrc)}>
              <img src={imgSrc} alt={`Interior Design ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* ✅ Load More & Load Less Buttons for Interior */}
        <div className="button-container">
          {visibleInteriorImages < interiorImages.length && (
            <button className="button" onClick={loadMoreInterior}>Load More</button>
          )}
          {visibleInteriorImages > initialImagesCount && (
            <button className="button" onClick={loadLessInterior}>Load Less</button>
          )}
        </div>

        {/* ✅ Exterior Design */}
        <h3>Exterior Designs</h3>
        <div className="work-gallery">
          {exteriorImages.slice(0, visibleExteriorImages).map((imgSrc, index) => (
            <div className="work-item" key={index} onClick={(e) => openLightbox(e, imgSrc)}>
              <img src={imgSrc} alt={`Exterior Design ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* ✅ Load More & Load Less Buttons for Exterior */}
        <div className="button-container">
          {visibleExteriorImages < exteriorImages.length && (
            <button className="button" onClick={loadMoreExterior}>Load More</button>
          )}
          {visibleExteriorImages > initialImagesCount && (
            <button className="button" onClick={loadLessExterior}>Load Less</button>
          )}
        </div>
      </section>

      {/* 🚀🔥 CONTACT US SECTION */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <a href="tel:+916362529866" className="contact-icon">
          <i className="fas fa-phone"></i> +916362529866
        </a>
        <a href="mailto:Dreamscapedesigns3@gmail.com" className="contact-icon">
          <i className="fas fa-envelope"></i> Dreamscapedesigns3@gmail.com
        </a>
        <a href="https://www.instagram.com/_dreamscapesdesigns_" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <i className="fab fa-instagram"></i> dreamscapesdesigns
        </a>
        <p className="engineer-name">Civil Engineer & Planner: Engr. Anas Mahammad</p>
      </section>

      {/* 🚀🔥 FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 dreamscapesdesigns. All rights reserved.</p>
      </footer>

      {/* ✅🔥 LIGHTBOX IMAGE POPUP */}
      {lightboxImage && (
        <div className="lightbox active" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Work" />
        </div>
      )}
    </div>
  );
}

export default App;
