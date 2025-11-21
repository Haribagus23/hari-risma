import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Target, Music, MessageCircle } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { t } = useLanguage();
  const dashboardRef = useRef(null);

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
          }, index * 150);
        }
      });
    }, observerOptions);

    const cards = dashboardRef.current?.querySelectorAll('.dashboard-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="dashboard-header">
        <h2 className="section-title">{t.dashboard.title}</h2>
      </div>
      
      <div className="dashboard-grid" ref={dashboardRef}>
        <div className="dashboard-card">
          <div className="card-icon">
            <Heart size={32} />
          </div>
          <h3 className="card-title">{t.dashboard.bucketList.title}</h3>
          <ul className="card-list">
            {t.dashboard.bucketList.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <Target size={32} />
          </div>
          <h3 className="card-title">{t.dashboard.goals.title}</h3>
          <ul className="card-list">
            {t.dashboard.goals.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card playlist-card">
          <div className="card-icon">
            <Music size={32} />
          </div>
          <h3 className="card-title">{t.dashboard.playlist.title}</h3>
          <div className="playlist-content">
            <div className="playlist-item">
              <Music size={20} className="playlist-icon" />
              <div>
                <p className="song-title">Perfect - Ed Sheeran</p>
                <p className="song-artist">Romantic Ballad</p>
              </div>
            </div>
            <div className="playlist-item">
              <Music size={20} className="playlist-icon" />
              <div>
                <p className="song-title">A Thousand Years - Christina Perri</p>
                <p className="song-artist">Love Song</p>
              </div>
            </div>
            <div className="playlist-item">
              <Music size={20} className="playlist-icon" />
              <div>
                <p className="song-title">All of Me - John Legend</p>
                <p className="song-artist">Wedding Song</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <MessageCircle size={32} />
          </div>
          <h3 className="card-title">{t.dashboard.loveNotes.title}</h3>
          <div className="love-notes">
            {t.dashboard.loveNotes.notes.map((note, index) => (
              <div key={index} className="note-item">
                <span className="note-quote">“</span>
                <p className="note-text">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;