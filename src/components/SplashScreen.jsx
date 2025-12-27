import { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for transition to complete
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${hidden ? 'hidden' : ''}`}>
      <div className="splash-logo">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        TRADE FLOW
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
      <div className="splash-text">Establishing Connection...</div>
    </div>
  );
};

export default SplashScreen;
