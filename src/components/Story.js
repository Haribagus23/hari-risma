import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Story.css';

const Story = () => {
  const { t } = useLanguage();
  const storyRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const chapters = storyRef.current?.querySelectorAll('.story-chapter');
    chapters?.forEach(chapter => observer.observe(chapter));

    return () => observer.disconnect();
  }, []);

  const chapterImages = [
    'https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg',
    'https://images.pexels.com/photos/7659394/pexels-photo-7659394.jpeg',
    'https://images.unsplash.com/photo-1589770506547-150098706564'
  ];

  return (
    <section id="story" className="story-section" ref={storyRef}>
      <div className="story-header">
        <h2 className="section-title">{t.story.title}</h2>
      </div>
      
      <div className="story-chapters">
        {t.story.chapters.map((chapter, index) => (
          <div 
            key={index} 
            className={`story-chapter ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="chapter-image-container">
              <div className="chapter-image-wrapper">
                <img 
                  src={chapterImages[index]} 
                  alt={chapter.title}
                  className="chapter-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
            
            <div className="chapter-content">
              <div className="glass-panel">
                <span className="chapter-number">0{index + 1}</span>
                <h3 className="chapter-title">{chapter.title}</h3>
                <p className="chapter-text">{chapter.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Story;