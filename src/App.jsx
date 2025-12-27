import { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Nav from './components/Nav';
import AppRouter from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSplashComplete = () => {
    setSplashComplete(true);
    setShowSplash(false);
    document.body.classList.add('loaded');
  };

  return (
    <div className="App">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {splashComplete && (
        <>
          <Nav />
          <AppRouter />
        </>
      )}
    </div>
  );
}

export default App;
