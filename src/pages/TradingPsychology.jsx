import { useEffect } from 'react';
import TradingPsychologySidebar from '../components/TradingPsychologySidebar';
import Footer from '../components/Footer';
import psychologyVideo from '../assets/videos/psychology.mp4?url';

const TradingPsychology = () => {
  useEffect(() => {
    // Initialize AOS for animations
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <main className="foundation-page psychology-page">
        <div className="psychology-video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="psychology-video"
          >
            <source src={psychologyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="psychology-video-overlay"></div>
        </div>
        <TradingPsychologySidebar />
        
        <div className="foundation-content">
          <header className="foundation-header" data-aos="fade-up">
            <h1 className="foundation-title">Mastering Trading Psychology</h1>
            <p className="foundation-subtitle">
              Understanding and overcoming the mental barriers that prevent trading success
            </p>
          </header>

          <section id="intro" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">What is Trading Psychology?</h2>
            <p className="foundation-section__text">
              Trading psychology is the study of how your emotions and mental state impact your decision-making, 
              behavior and overall performance in financial markets. While many traders focus exclusively on technical 
              analysis, indicators and strategies, the defining factor between a profitable trader and a losing one 
              is often their ability to manage their mind.
            </p>
          </section>

          <section id="before-start" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Before You Start: Is it Psychology or Strategy?</h2>
            <p className="foundation-section__text">
              Many traders attribute their losses to "psychology" to avoid facing a hard truth: their technical 
              skills may need work. This is often a defense mechanism known as Ego Preservation.
            </p>
            
            <div className="foundation-section__callout">
              <p className="foundation-section__callout-text">
                <strong>The Trap:</strong> It is easier to blame an abstract concept like "mindset" than to admit 
                you lack technical knowledge.
              </p>
            </div>

            <p className="foundation-section__text">
              <strong>The Reality Check:</strong> Before diving into psychological fixes, ensure your trading strategy 
              has a proven edge. If your strategy works but you still lose money, then psychology is the culprit.
            </p>
          </section>

          <section id="fomo" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">1. Fear of Missing Out (FOMO)</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              The anxiety that other traders are making profits while you are sitting on the sidelines. This leads 
              to impulsive trades and chasing price action.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              The human tendency to compare oneself to others and the fear of being "left behind" on a perceived 
              once-in-a-lifetime opportunity.
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Develop a strict Trading Checklist.</strong> If the criteria aren't met, you do not trade.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Adopt an Abundance Mindset:</strong> The market generates trillions in volume daily. There 
                will always be another opportunity.
              </li>
            </ul>
          </section>

          <section id="overtrading" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">2. Overtrading</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              Entering the market too frequently, often ignoring your plan, usually in a desperate attempt to cover 
              recent losses quickly.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              Impatience, a need for action (dopamine seeking), or the urge to "make back" money immediately.
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Set Hard Limits:</strong> Define a maximum number of trades per day or week (e.g., "I will 
                take no more than 3 trades per day").
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>The Walk-Away Rule:</strong> After hitting your limit (win or lose), close the charts and 
                walk away until the next session.
              </li>
            </ul>
          </section>

          <section id="impatience" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">3. Impatience</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              The inability to wait for high-quality setups, leading to entering trades too early or exiting profitable 
              trades before they hit their target.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              A desire for immediate gratification and results.
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                Remind yourself that <strong>Good Trades Take Time.</strong> The market does not move on your schedule.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Practice Mindfulness:</strong> Recognize the urge to click the button and consciously choose 
                to wait for the candle close or the specific confirmation.
              </li>
            </ul>
          </section>

          <section id="revenge-trading" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">4. Revenge Trading</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              Aggressively re-entering the market immediately after a loss to "win back" the money. This is often 
              the fastest way to blow a trading account.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              An emotional reaction to loss (anger/frustration) and a refusal to accept a "red day."
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Recognize the Trigger:</strong> Learn to spot the physical signs of anger (increased heart 
                rate, heat).
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>The Cool-Down Period:</strong> Mandate a 30-minute break after any loss. Do not re-enter the 
                market until you are calm and have reviewed your strategy objectively.
              </li>
            </ul>
          </section>

          <section id="confirmation-bias" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">5. Confirmation Bias</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              Focusing only on information that supports your existing trade idea while ignoring warning signs that 
              contradict it.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              The brain naturally seeks to protect its beliefs (e.g., "I think the market is bullish, so I will only 
              look for bullish news").
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Play Devil's Advocate:</strong> Before entering a trade, actively ask yourself: "What are 
                three reasons why this trade might fail?"
              </li>
              <li style={{ marginBottom: '12px' }}>
                Evaluate trades based strictly on <strong>Data, not "gut feeling" or hope.</strong>
              </li>
            </ul>
          </section>

          <section id="gamblers-fallacy" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">6. The Gambler's Fallacy</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              Believing that past independent events influence future outcomes. (e.g., "I hit stop-loss 3 times in a 
              row, so the next trade has to be a winner.")
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              A misunderstanding of probability and randomness.
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Independent Events:</strong> Understand that the market has no memory. Your last trade has 
                absolutely no mathematical relationship to your next trade.
              </li>
              <li style={{ marginBottom: '12px' }}>
                Trust the <strong>Long-Term Edge,</strong> not the immediate outcome of one trade.
              </li>
            </ul>
          </section>

          <section id="sunk-cost" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">7. Sunk Cost Fallacy</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              Holding onto a losing trade far past your stop-loss because you have already invested time, money or 
              emotion into it.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              The psychological inability to accept a loss, believing that "if I just wait a little longer, it will 
              turn around."
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Set Clear Exit Strategies:</strong> Your exit point must be defined before you enter the trade.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Respect the Stop-Loss:</strong> View a stop-loss not as a failure, but as a business expense 
                to protect your capital for the next opportunity.
              </li>
            </ul>
          </section>

          <section id="fear-trigger" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">8. Fear of Pulling the Trigger</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              Analysis paralysis where you identify a valid setup but freeze and fail to execute the trade.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              A deep-seated fear of failure, losing money or making a "wrong" decision.
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Backtesting:</strong> Confidence comes from competence. If you have backtested your strategy 
                100 times, you will trust the probability.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Think in Probabilities:</strong> Accept that losses are part of the game. You don't need to 
                win every trade to be profitable; you just need to execute your edge.
              </li>
            </ul>
          </section>

          <section id="analysis-paralysis" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">9. Analysis Paralysis</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              Overthinking and over-analyzing data to the point of inaction. You have 50 indicators on your chart 
              and they all say different things.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              Fear of making a mistake leads to excessive information gathering.
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Simplify Your Strategy:</strong> Reduce the number of variables you look at. A clean chart 
                often leads to clearer decisions.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Time-Box Your Analysis:</strong> Give yourself 15 minutes to analyze the chart. If you can't 
                find a setup in that time, there likely isn't one.
              </li>
            </ul>
          </section>

          <section id="perfectionism" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">10. Perfectionism</h2>
            
            <h3 className="foundation-section__subtitle">The Problem</h3>
            <p className="foundation-section__text">
              The desire to only take "perfect" trades with zero drawdown, leading to missed opportunities and 
              frustration when real trading is messy.
            </p>

            <h3 className="foundation-section__subtitle">The Root Cause</h3>
            <p className="foundation-section__text">
              Unrealistic expectations fueled by social media "gurus" who only show winning trades.
            </p>

            <h3 className="foundation-section__subtitle">How to Fix It</h3>
            <ul className="foundation-section__text" style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Embrace Imperfection:</strong> No trade is perfect. The goal is "Excellence," not "Perfection."
              </li>
              <li style={{ marginBottom: '12px' }}>
                Focus on your <strong>Win Rate and Risk-Reward Ratio</strong> over a series of 100 trades, rather 
                than obsessing over the outcome of a single trade.
              </li>
            </ul>
          </section>

          <section id="conclusion" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">The Missing Point</h2>
            <p className="foundation-section__text">
              Understanding these 10 psychology traps is the first step. To truly master them, you must document your journey.
            </p>

            <div className="foundation-section__callout">
              <p className="foundation-section__callout-text">
                <strong>Recommendation: Start a Trading Journal</strong>
              </p>
              <p className="foundation-section__callout-text" style={{ marginTop: '16px' }}>
                You cannot fix what you do not track. Alongside your entry and exit prices, write down how you felt 
                when you took the trade. Were you anxious? Did you revenge trade? Reviewing this journal is the only 
                way to spot which of the 10 problems above is your personal "kryptonite."
              </p>
            </div>

            <p className="foundation-section__text" style={{ marginTop: '32px', fontSize: '1.1rem', fontWeight: '600' }}>
              Success in trading is 20% strategy and 80% psychology. Master your mind, and the market will follow.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TradingPsychology;
