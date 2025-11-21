import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';
import './AIGreetingOrb.css';

const AIGreetingOrb = () => {
  const { t } = useLanguage();
  const [showBubble, setShowBubble] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return t.greeting.morning;
      if (hour >= 12 && hour < 17) return t.greeting.afternoon;
      if (hour >= 17 && hour < 21) return t.greeting.evening;
      return t.greeting.night;
    };
    setGreeting(getGreeting());
  }, [t]);

  const handleOrbClick = () => {
    setShowBubble(!showBubble);
  };

  return (
    <>
      <div className="ai-orb" onClick={handleOrbClick}>
        <div className="orb-glow"></div>
        <div className="orb-core"></div>
      </div>

      {showBubble && (
        <div className="greeting-bubble">
          <button className="bubble-close" onClick={() => setShowBubble(false)}>
            <X size={20} />
          </button>
          <div className="bubble-content">
            <h3 className="greeting-title">{greeting}!</h3>
            <p className="greeting-message typewriter">{t.greeting.message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIGreetingOrb;