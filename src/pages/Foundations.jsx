import { useEffect } from 'react';
import FoundationSidebar from '../components/FoundationSidebar';
import FoundationImage from '../components/FoundationImage';
import Footer from '../components/Footer';

// Import images using ?url to handle spaces in filenames
import tradingIntro from '../assets/images/foundations/Trading introduction.jpg?url';
import financialMarkets from '../assets/images/foundations/financail markets.jpg?url';
import tradingHierarchy from '../assets/images/foundations/hirachi of trading.png?url';
import marketTypes from '../assets/images/foundations/market types.jpg?url';
import brokers from '../assets/images/foundations/brokers.jpg?url';
import propFirm from '../assets/images/foundations/prop firm.png?url';
import tradingPlatforms from '../assets/images/foundations/Market types.png?url';
import liveTradingStage from '../assets/images/foundations/live trading stage.png?url';
import tradersMindset from '../assets/images/foundations/traders mindset.png?url';

const Foundations = () => {
  useEffect(() => {
    // Initialize AOS for animations
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <main className="foundation-page">
        <div className="trading-background-animation">
          <div className="candlestick-animation"></div>
          <div className="chart-line-animation"></div>
        </div>
        <FoundationSidebar />
        
        <div className="foundation-content">
          <header className="foundation-header" data-aos="fade-up">
            <h1 className="foundation-title">Basic Fundamentals of Trading</h1>
            <p className="foundation-subtitle">
              Master the fundamental concepts that form the backbone of successful trading
            </p>
          </header>

          <section id="intro" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Introduction to Trading</h2>
            <p className="foundation-section__text">
              Trading is not about indicators, strategies or fast profits. It is a skill built on understanding 
              how markets function, how participants behave and how risk must be managed under uncertainty. 
              This section will guide you to give you a clear mental framework before you ever 
              place a real trade.
            </p>
            <p className="foundation-section__text">
              Without the strong foundation, even the best strategies will eventually fail. Trading is the act of 
              participating in financial markets by buying and selling assets with the intention of benefiting 
              from price movements. Unlike long-term investing, trading requires decision-making under pressure, 
              fast execution and strict risk control. Every trade is a probability-based decision, not a guarantee.
            </p>
            <p className="foundation-section__text">
              Most beginners approach trading with unrealistic expectations like quick profits, minimal effort and 
              emotional decision-making. In reality, professional trading is closer to running a business than 
              playing a game. Success comes from consistency, discipline and understanding the mechanics behind 
              price movement.
            </p>
            <FoundationImage 
              imageSrc={tradingIntro}
              alt="Introduction to trading fundamentals"
            />
          </section>

          <section id="financial-markets" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">What are Financial Markets ?</h2>
            <p className="foundation-section__text">
              Financial markets are platforms where buyers and sellers come together to trade financial instruments. 
              These markets facilitate the exchange of assets, determine prices through supply and demand dynamics 
              and provide liquidity for participants to enter and exit positions efficiently.
            </p>
            <p className="foundation-section__text">
              Markets operate 24 hours a day across different time zones, creating continuous opportunities for 
              traders worldwide. Understanding how markets function, their structure and the forces that drive 
              price movement is essential for any trader seeking consistent profitability.
            </p>
            <FoundationImage 
              imageSrc={financialMarkets}
              alt="Financial markets ecosystem diagram"
            />
          </section>

          <section id="market-participants" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Market Participants</h2>
            
            <h3 className="foundation-section__subtitle">Retail Traders</h3>
            <p className="foundation-section__text">
              Retail traders are individual traders who trade with their own capital. They typically have smaller 
              account sizes and trade from home using online platforms. Retail traders make up a significant portion 
              of market participants but often face challenges due to limited resources, lack of institutional 
              information and emotional trading decisions.
            </p>

            <h3 className="foundation-section__subtitle">Institutional Traders</h3>
            <p className="foundation-section__text">
              Institutional traders represent large organizations such as banks, hedge funds, pension funds and 
              investment firms. They trade with substantial capital, have access to advanced technology, research 
              teams and market intelligence. Their trading decisions can significantly impact market movements, 
              making them influential players in the financial ecosystem.
            </p>


            <h3 className="foundation-section__subtitle">Who Controls the Market</h3>
            <p className="foundation-section__text">
              While no single entity completely controls the market, institutional participants have the most 
              influence due to their large order sizes and capital reserves. Central banks also play a crucial 
              role through monetary policy decisions that affect currency values and market sentiment. Understanding 
              who moves markets helps retail traders align their strategies with institutional flow and avoid 
              being caught on the wrong side of major moves.
            </p>

            <FoundationImage 
              imageSrc={tradingHierarchy}
              alt="Market participants hierarchy pyramid"
            />
          </section>

          <section id="types-of-markets" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Different Type of Markets</h2>
            
            <h3 className="foundation-section__subtitle">Forex</h3>
            <p className="foundation-section__text">
              The foreign exchange (Forex) market is the largest and most liquid financial market globally, with 
              daily trading volume exceeding $7 trillion. It involves trading currency pairs, where traders speculate 
              on the relative strength of one currency against another. The Forex market operates 24/5 and offers 
              high leverage, making it attractive to traders seeking volatility and round-the-clock opportunities.
            </p>

            <h3 className="foundation-section__subtitle">Indices</h3>
            <p className="foundation-section__text">
              Stock indices represent baskets of stocks from specific exchanges or sectors. Popular indices include 
              the S&P 500, NASDAQ, Dow Jones, FTSE 100, and DAX. Trading indices allows exposure to broad market 
              movements without selecting individual stocks. Indices often move based on economic data, geopolitical 
              events and overall market sentiment.
            </p>

            <h3 className="foundation-section__subtitle">Futures</h3>
            <p className="foundation-section__text">
              Futures contracts are standardized agreements to buy or sell an asset at a predetermined price on a 
              future date. Futures markets include commodities, currencies, indices and interest rates. They offer 
              leverage, liquidity, and the ability to go long or short, making them popular among professional 
              traders for hedging and speculation.
            </p>

            <h3 className="foundation-section__subtitle">Assets </h3>
            <p className="foundation-section__text">
              Commodity trading involves physical assets like precious metals (gold, silver) and energy products (oil, 
              natural gas). These markets are influenced by supply and demand dynamics, geopolitical tensions, economic 
              indicators and currency movements. Gold is often seen as a safe-haven asset during economic uncertainty, 
              while oil prices are sensitive to production levels and global demand.
            </p>

            <h3 className="foundation-section__subtitle">Cryptocurrency</h3>
            <p className="foundation-section__text">
              Cryptocurrency markets represent a relatively new asset class featuring digital currencies like Bitcoin, 
              Ethereum and thousands of altcoins. Crypto markets operate 24/7, exhibit extreme volatility and are 
              driven by technology developments, regulatory news, adoption rates and market sentiment. While offering 
              high profit potential, crypto trading requires careful risk management due to its volatility and regulatory 
              uncertainty.
            </p>

            <FoundationImage 
              imageSrc={marketTypes}
              alt="Different types of financial markets"
            />
          </section>

          <section id="brokers" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Brokers</h2>
            <p className="foundation-section__text">
              Brokers are intermediaries that provide traders with access to financial markets. They offer trading 
              platforms, execute orders, provide leverage and charge fees through spreads or commissions. Choosing 
              the right broker is crucial for trading success, as factors like regulation, execution speed, spreads, 
              customer support and platform quality directly impact trading performance.
            </p>
            <p className="foundation-section__text">
              Reputable brokers are regulated by financial authorities, ensuring they meet strict standards for capital 
              requirements, client fund segregation, and fair trading practices. Always verify a broker's regulatory 
              status before depositing funds and ensure they offer the instruments, leverage and platforms that match 
              your trading needs.
            </p>
            <FoundationImage 
              imageSrc={brokers}
              caption="Choosing the Right Broker" 
              alt="Guide to choosing the right broker"
            />
          </section>

          <section id="prop-firms" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Prop Firms</h2>
            <p className="foundation-section__text">
              Proprietary trading firms (prop firms) provide traders with capital to trade in exchange for a share of 
              profits. These firms allow skilled traders to access larger capital without risking their own money upfront. 
              Traders must pass evaluation challenges that test their risk management and consistency before receiving 
              funded accounts.
            </p>
            <p className="foundation-section__text">
              Prop firms have become increasingly popular as they offer a path to professional trading for individuals 
              with limited capital. However, traders must understand the firm's rules, profit-sharing structures and 
              risk limits. Success with prop firms requires discipline, proper risk management, and the ability to 
              consistently meet their trading objectives.
            </p>
            <FoundationImage 
              imageSrc={propFirm}
              caption="Prop Firm Trading Structure" 
              alt="Proprietary trading firm structure"
            />
          </section>

          <section id="trading-apps" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Trading Applications</h2>
            
            <h3 className="foundation-section__subtitle">TradingView</h3>
            <p className="foundation-section__text">
              TradingView is a powerful web-based charting platform that provides advanced technical analysis tools, 
              custom indicators, social trading features and real-time market data. It supports multiple markets 
              including stocks, forex, cryptocurrencies and futures. TradingView's intuitive interface, extensive 
              community scripts, and cloud-based synchronization make it popular among traders of all levels.
            </p>

            <h3 className="foundation-section__subtitle">MetaTrader 5</h3>
            <p className="foundation-section__text">
              MetaTrader 5 (MT5) is a professional trading platform developed by MetaQuotes Software. It offers advanced 
              technical analysis, automated trading through Expert Advisors (EAs), multiple timeframes, and support for 
              various financial instruments. MT5 is widely used by forex and CFD brokers and provides a comprehensive 
              suite of tools for both manual and algorithmic trading.
            </p>

            <h3 className="foundation-section__subtitle">Exchanges</h3>
            <p className="foundation-section__text">
              Cryptocurrency exchanges like Binance, Coinbase and Kraken provide direct access to digital asset markets. 
              These platforms offer spot trading, futures, options and staking services. Exchange platforms vary in 
              features, fees, security measures and supported cryptocurrencies. Choosing a reputable, secure exchange 
              with good liquidity and competitive fees is essential for crypto trading success.
            </p>

            <FoundationImage 
              imageSrc={tradingPlatforms}
              alt="Comparison of popular trading platforms"
            />
          </section>

          <section id="why-learn" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Why we should learn Trading</h2>
            
            <h3 className="foundation-section__subtitle">Benefits of Trading</h3>
            <p className="foundation-section__text">
              Trading offers several potential benefits including financial independence, flexible work schedule, unlimited 
              income potential, and the ability to work from anywhere. It provides an opportunity to build wealth through 
              skillful analysis and disciplined execution. Trading also develops valuable skills like risk management, 
              decision-making under pressure, and market analysis that are transferable to other areas of life.
            </p>

            <h3 className="foundation-section__subtitle">Is it possible to make money in Trading</h3>
            <p className="foundation-section__text">
              Yes, it is possible to make money trading, but it requires significant education, practice, discipline and 
              risk management. The reality is that a majority of retail traders lose money, often due to lack of preparation, 
              poor risk management, emotional trading, and unrealistic expectations. Those who succeed typically invest 
              considerable time in learning, practice extensively on demo accounts, maintain strict discipline, and treat 
              trading as a serious business rather than gambling.
            </p>

            <h3 className="foundation-section__subtitle">Trading Roadmap</h3>
            
            <h4 className="foundation-section__sub-subtitle">Research Stage (Gather Knowledge)</h4>
            <p className="foundation-section__text">
              The first stage involves comprehensive learning about markets, instruments, analysis methods and risk 
              management. This includes studying technical and fundamental analysis, understanding market psychology, 
              learning from successful traders and building a strong theoretical foundation. Quality education at this 
              stage sets the foundation for future success.
            </p>

            <h4 className="foundation-section__sub-subtitle">Refine Stage (Practice & Journal)</h4>
            <p className="foundation-section__text">
              After acquiring knowledge, traders must practice extensively on demo accounts to develop their skills without 
              risking real money. This stage involves testing strategies, refining entry and exit rules, developing risk 
              management protocols and maintaining detailed trading journals. Journaling helps identify patterns in behavior, 
              track performance and continuously improve decision-making processes.
            </p>

            <h4 className="foundation-section__sub-subtitle">Trade in Live Stage</h4>
            <p className="foundation-section__text">
              Once consistently profitable on demo accounts and having developed solid risk management, traders can transition 
              to live trading with real capital. This stage requires starting small, maintaining the same discipline practiced 
              during the refine stage, and gradually scaling position sizes as confidence and consistency grow. Psychological 
              challenges increase significantly when real money is at stake, making emotional control and strict adherence to 
              trading plans essential.
            </p>

            <FoundationImage 
              imageSrc={liveTradingStage}
              alt="Trading success roadmap visualization"
            />
          </section>

          <section id="traders-mindset" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Traders Mindset</h2>
            <p className="foundation-section__text">
              A trader's mindset is perhaps the most critical factor determining long-term success. Professional traders 
              understand that losses are part of the game, focus on process over outcomes, maintain emotional detachment 
              from individual trades and prioritize risk management above all else. They accept that not every trade will 
              be profitable and focus on maintaining consistency over time.
            </p>
            <p className="foundation-section__text">
              Successful traders develop patience, discipline and the ability to stick to their trading plans even during 
              drawdowns. They avoid revenge trading, overtrading, and letting emotions drive decisions. Instead, they treat 
              trading as a business with strict rules, continuous learning and systematic improvement. Cultivating the right 
              mindset requires self-awareness, regular self-reflection and a commitment to personal development alongside 
              technical skills.
            </p>
            <FoundationImage 
              imageSrc={tradersMindset}
              alt="Trader mindset and psychology fundamentals"
            />
          </section>

          <section id="final-note" className="foundation-section" data-aos="fade-up">
            <h2 className="foundation-section__title">Final Note</h2>
            <p className="foundation-section__text">
              Trading is a journey that requires dedication, continuous learning and unwavering discipline. There are no 
              shortcuts to consistent profitability. Success comes from building a solid foundation of knowledge, developing 
              robust risk management practices, maintaining emotional control and treating trading as a serious business 
              endeavor.
            </p>
            <p className="foundation-section__text">
              Remember that every professional trader started as a beginner. The difference between those who succeed and 
              those who fail lies in their commitment to education, practice, and discipline. Focus on the process, manage 
              risk diligently, learn from every trade and maintain realistic expectations. With the right foundation, mindset 
              and approach, trading can become a rewarding and profitable pursuit.
            </p>
            <div className="foundation-section__callout">
              <p className="foundation-section__callout-text">
                <strong>Remember:</strong> The foundation you build today determines the success you achieve tomorrow. 
                Take your time, be patient and prioritize learning over profits in the early stages of your trading journey.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Foundations;
