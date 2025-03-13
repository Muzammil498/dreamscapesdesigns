import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function InteriorPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imgSrc) => {
    setLightboxImage(imgSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="section">
      <h2>All Interior Designs</h2>
      
      <div className="work-gallery">
        <div className="work-item" onClick={() => openLightbox('/interior1.jpg')}>
          <img src="/interior1.jpg" alt="Interior Design 1" />
        </div>
        <div className="work-item" onClick={() => openLightbox('/interior2.jpg')}>
          <img src="/interior2.jpg" alt="Interior Design 2" />
        </div>
        <div className="work-item" onClick={() => openLightbox('/interior3.jpg')}>
          <img src="/interior3.jpg" alt="Interior Design 3" />
        </div>
      </div>

      <Link to="/">
        <button className="load-more">⬅️ Back to Home</button>
      </Link>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Work" />
        </div>
      )}
    </div>
  );
}

export default InteriorPage;
