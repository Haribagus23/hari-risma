import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (orbRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        orbRef.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotateX(${y}deg) rotateY(${x}deg)`;
      }
    };

    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-content" ref={heroRef}>
        <div className="hero-orb" ref={orbRef}>
          <div className="orb-inner"></div>
          <div className="orb-ring"></div>
        </div>
        
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        
        <button className="hero-cta" onClick={scrollToStory}>
          {t.hero.cta}
          <ArrowDown size={20} />
        </button>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;