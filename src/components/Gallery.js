import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();
  const galleryRef = useRef(null);

  const images = [
    'https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg',
    'https://images.pexels.com/photos/7659394/pexels-photo-7659394.jpeg',
    'https://images.unsplash.com/photo-1570514865273-d2b91814e697',
    'https://images.unsplash.com/photo-1674757556196-63bfd0dcb3fe',
    'https://images.pexels.com/photos/887349/pexels-photo-887349.jpeg',
    'https://images.pexels.com/photos/6940315/pexels-photo-6940315.jpeg',
    'https://images.unsplash.com/photo-1589770506547-150098706564',
    'https://images.unsplash.com/photo-1758810409620-f4961f7431e8'
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, observerOptions);

    const items = galleryRef.current?.querySelectorAll('.gallery-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">{t.gallery.title}</h2>
      </div>
      
      <div className="gallery-grid" ref={galleryRef}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <div className="gallery-card">
              <img src={image} alt={`Memory ${index + 1}`} />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <span className="memory-number">#{index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;