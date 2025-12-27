export const academyModules = [
  {
    slug: 'foundations',
    title: 'Foundations',
    subtitle: 'Market fundamentals, sessions, pairs, liquidity basics',
    accent: 'yellow',
  },
  {
    slug: 'analysis',
    title: 'Analysis',
    subtitle: 'ICT concepts, 2022 model, personal framework',
    accent: 'teal',
  },
  {
    slug: 'psychology',
    title: 'Psychology',
    subtitle: 'Discipline, overtrading, mindset frameworks',
    accent: 'purple',
  },
  {
    slug: 'risk',
    title: 'Risk Management',
    subtitle: 'Risk models, position sizing, capital protection',
    accent: 'green',
  },
];

// Placeholder lessons. When you upload the PDF, we’ll map your table of contents into this structure.
export const academyLessons = {
  foundations: {
    title: 'Foundations',
    description:
      'Start here: clean fundamentals and practical mental models before advanced concepts.',
    topics: [
      {
        id: 'basics',
        title: 'Basics',
        lessons: [
          {
            id: 'intro',
            title: 'How to use TradeFlow Academy',
            readingTime: '4 min',
            blocks: [
              { type: 'h2', text: 'Welcome' },
              {
                type: 'p',
                text:
                  'TradeFlow Academy is a structured, text-first learning system. No fluff — clear definitions, examples, and repeatable frameworks.',
              },
              {
                type: 'callout',
                title: 'What this is / isn’t',
                text:
                  'This is NOT a broker and NOT a trading platform. It’s a learning + tools ecosystem built to improve consistency.',
              },
              { type: 'image', caption: 'Image placeholder — replace later' },
              {
                type: 'p',
                text:
                  'Use the left sidebar to navigate. Each lesson is split into short sections you can review quickly.',
              },
            ],
          },
          {
            id: 'market-structure',
            title: 'Market Structure 101',
            readingTime: '8 min',
            blocks: [
              { type: 'h2', text: 'Market Structure' },
              {
                type: 'p',
                text:
                  'A practical overview of highs/lows, trend legs, and how to avoid over-complication.',
              },
              {
                type: 'code',
                language: 'Framework',
                code:
                  'Rule of thumb:\n- Identify the current leg\n- Mark last confirmed swing\n- Define invalidation\n- Only then plan entries',
              },
              { type: 'image', caption: 'Chart placeholder — replace later' },
            ],
          },
        ],
      },
      {
        id: 'sessions',
        title: 'Sessions & Liquidity',
        lessons: [
          {
            id: 'sessions-overview',
            title: 'Sessions (London / New York / Asia)',
            readingTime: '6 min',
            blocks: [
              { type: 'h2', text: 'Why sessions matter' },
              {
                type: 'p',
                text:
                  'Sessions affect volatility, liquidity, and the type of setups that tend to appear.',
              },
              { type: 'image', caption: 'Sessions diagram placeholder' },
            ],
          },
          {
            id: 'liquidity-basics',
            title: 'Liquidity Basics',
            readingTime: '7 min',
            blocks: [
              { type: 'h2', text: 'Liquidity' },
              {
                type: 'p',
                text:
                  'Liquidity is where orders sit. Your job is to understand where traders are likely positioned and what price needs to do to move.',
              },
              {
                type: 'callout',
                title: 'Key idea',
                text:
                  'Most retail traders focus on entries. Professionals focus on where the exits/liquidations are.',
              },
              { type: 'image', caption: 'Liquidity zones placeholder' },
            ],
          },
        ],
      },
    ],
  },
  analysis: {
    title: 'Analysis',
    description:
      'Retail technical analysis — grouped lessons (candles → patterns → S/R → structure → fib → indicators).',
    topics: [
      {
        id: 'intro',
        title: 'Start Here',
        lessons: [
          {
            id: 'what-is-trading',
            title: 'What is Trading?',
            readingTime: '7 min',
            blocks: [
              { type: 'h2', text: 'What is Trading?' },
              {
                type: 'p',
                text:
                  'Trading is the process of buying and selling financial instruments to profit from price variations. It supports price discovery, liquidity, and capital allocation in financial markets.',
              },
              {
                type: 'p',
                text:
                  'The principle remains the same whether you are managing a personal portfolio or moving institutional size: buy low and sell high — or sell high and buy low (shorting).',
              },
              { type: 'h3', text: 'Types of trading (by market)' },
              {
                type: 'ul',
                items: [
                  'Stock trading: buying/selling shares of public companies',
                  'Forex trading: trading currency pairs via exchange-rate differences',
                  'Commodities trading: raw materials like gold, oil, agriculture (often via futures)',
                  'Crypto trading: digital assets like Bitcoin and Ethereum',
                ],
              },
              { type: 'image', caption: 'Asset classes infographic (placeholder)' },
            ],
          },
          {
            id: 'analysis-overview',
            title: 'Analysis (Overview)',
            readingTime: '7 min',
            blocks: [
              { type: 'h2', text: 'Analysis' },
              {
                type: 'p',
                text:
                  "Technical analysis is used to evaluate price trends and patterns to identify potential opportunities. Many analysts believe past activity and price changes can provide useful indicators of future movement.",
              },
              { type: 'h3', text: 'Analysis methods' },
              {
                type: 'ul',
                items: ['Retail', 'SK system', 'Harmonic', 'Smart Money Concepts'],
              },
              {
                type: 'callout',
                title: 'Why we start with Retail',
                text:
                  'Retail gives the base skills: candles, structure, patterns, S/R, Fibonacci, indicators — before advanced concepts.',
              },
            ],
          },
        ],
      },
      {
        id: 'retail',
        title: 'Retail (Grouped Lessons)',
        lessons: [
          {
            id: 'retail-roadmap',
            title: 'Retail Roadmap',
            readingTime: '5 min',
            blocks: [
              { type: 'h2', text: 'Retail' },
              {
                type: 'p',
                text:
                  'Retail is the most basic and easiest analysis method. This section is organized as grouped lessons so you can learn fast without jumping through too many pages.',
              },
              {
                type: 'ul',
                items: [
                  'Candlestick formations',
                  'Chart patterns',
                  'Support and Resistance',
                  'Market Structure',
                  'Fibonacci tools',
                  'Indicators',
                ],
              },
              { type: 'image', caption: 'Retail roadmap (placeholder)' },
            ],
          },
          {
            id: 'candlesticks',
            title: 'Candlestick Formations (Grouped)',
            readingTime: '18 min',
            blocks: [
              { type: 'h2', text: 'Candlestick formations' },
              {
                type: 'p',
                text:
                  'Candlestick charts pack multiple time frames into single price bars. They’re often more useful than traditional OHLC bars or simple line charts because they form patterns that may predict direction once completed.',
              },
              { type: 'h3', text: 'Types' },
              {
                type: 'ol',
                items: [
                  'Doji and Spinning Tops',
                  'Morning Star',
                  'Bullish/Bearish Engulfing',
                  'Evening Star',
                  'Hammer',
                  'Shooting Star',
                  '3 Black Crows & 3 White Soldiers',
                  'Hanging Man',
                  'Piercing Pattern',
                ],
              },
              { type: 'image', caption: 'Candlestick anatomy (placeholder)' },
              { type: 'h3', text: 'Doji and spinning tops' },
              {
                type: 'p',
                text:
                  'Doji/spinning tops often signal indecision. Variants like gravestone, long-legged, and dragonfly are common.',
              },
              { type: 'image', caption: 'Doji examples (placeholder)' },
              { type: 'h3', text: 'Morning Star' },
              {
                type: 'p',
                text:
                  'A three-candle pattern. The low is on the second candle, but it becomes clear only after the third candle closes.',
              },
              { type: 'image', caption: 'Morning Star example (placeholder)' },
              { type: 'h3', text: 'Bullish/Bearish Engulfing' },
              {
                type: 'p',
                text:
                  'Bearish engulfing develops in an uptrend when sellers outnumber buyers. Bullish engulfing appears when buyers outpace sellers.',
              },
              { type: 'image', caption: 'Engulfing examples (placeholder)' },
              { type: 'h3', text: 'Evening Star' },
              {
                type: 'p',
                text:
                  'Often appears near the top of an uptrend, indicating the uptrend is nearing its end.',
              },
              { type: 'image', caption: 'Evening Star example (placeholder)' },
              { type: 'h3', text: 'Hammer' },
              {
                type: 'p',
                text:
                  'Hammer is a bullish reversal pattern signaling a potential bottom in a downtrend. Inverted hammer can also signal reversal/support.',
              },
              { type: 'image', caption: 'Hammer / Inverted Hammer (placeholder)' },
              { type: 'h3', text: 'Shooting Star' },
              {
                type: 'p',
                text:
                  'A bearish candle with a long upper shadow, little/no lower shadow, and small real body near the low — often after an uptrend.',
              },
              { type: 'image', caption: 'Shooting Star example (placeholder)' },
              { type: 'h3', text: '3 Black Crows & 3 White Soldiers' },
              {
                type: 'p',
                text:
                  'Three black crows: three long bearish candles closing lower each day. Three white soldiers: often after downtrend/consolidation, confirming reversal with strong momentum/volume.',
              },
              { type: 'image', caption: '3 Crows / 3 Soldiers (placeholder)' },
              { type: 'h3', text: 'Hanging Man' },
              {
                type: 'p',
                text:
                  'Appears during an uptrend and warns prices may start falling. Small body, long lower shadow, little/no upper shadow.',
              },
              { type: 'image', caption: 'Hanging Man example (placeholder)' },
              { type: 'h3', text: 'Piercing Pattern' },
              {
                type: 'p',
                text:
                  'Two-day pattern that can signal reversal from downtrend to uptrend. The second day closes above at least half of the first day’s bearish body.',
              },
              { type: 'image', caption: 'Piercing Pattern example (placeholder)' },
              { type: 'h3', text: 'Advanced Candlestick Patterns' },
              {
                type: 'ul',
                items: [
                  'Island reversal: gap between reversal candle and surrounding candles; strong short-term reversal signal.',
                  'Hook reversal: higher low + lower high compared with previous day; short/medium reversal.',
                  'San-Ku (three gaps): anticipatory reversal after sharp move; consider RSI extremes or MACD crossover for confirmation.',
                  'Kicker: very sharp two-candle reversal with gap + strong follow-through.',
                ],
              },
              { type: 'image', caption: 'Advanced patterns (placeholder)' },
            ],
          },
          {
            id: 'chart-patterns',
            title: 'Chart Patterns (Grouped)',
            readingTime: '16 min',
            blocks: [
              { type: 'h2', text: 'Chart Patterns' },
              { type: 'h3', text: 'Trend lines' },
              {
                type: 'p',
                text:
                  'Trend lines are straight lines drawn by connecting descending peaks (highs) or ascending troughs (lows). They help spot support/resistance areas.',
              },
              { type: 'image', caption: 'Trend line drawing (placeholder)' },
              { type: 'h3', text: 'Continuation patterns' },
              {
                type: 'p',
                text:
                  'Continuation patterns represent temporary pauses in a prevailing trend. Assume trend continues until reversal is confirmed.',
              },
              { type: 'h3', text: 'Reversal patterns' },
              {
                type: 'p',
                text:
                  'Reversal patterns signal a change in the prevailing trend — the established trend pauses then heads in a new direction.',
              },
              { type: 'h3', text: 'Type of patterns' },
              {
                type: 'ol',
                items: [
                  'Double Tops and Bottoms',
                  'Triple Tops and Bottoms',
                  'Head and Shoulders (and inverse)',
                  'Flag Patterns',
                  'Pennant Patterns',
                  'Triangle Patterns',
                  'Wedge Patterns',
                  'Cup and Handle',
                ],
              },
              { type: 'image', caption: 'Pattern gallery (placeholder)' },
              {
                type: 'callout',
                title: 'Note',
                text:
                  'Peaks/troughs don’t have to be perfectly equal for “M” or “W” patterns. Focus on rejection + break of structure.',
              },
            ],
          },
          {
            id: 'support-resistance',
            title: 'Support & Resistance',
            readingTime: '12 min',
            blocks: [
              { type: 'h2', text: 'Support and Resistance' },
              {
                type: 'p',
                text:
                  'Support and resistance are foundational. Prices move because of supply and demand: demand > supply → rise; supply > demand → fall.',
              },
              { type: 'h3', text: 'What is support?' },
              {
                type: 'p',
                text:
                  'In a downtrend, demand rises as prices become attractive. At a level where demand matches supply, price stops falling — that is support.',
              },
              { type: 'h3', text: 'What is resistance?' },
              {
                type: 'p',
                text:
                  'In an uptrend, selling eventually overwhelms buying. That zone where supply overwhelms demand is resistance.',
              },
              { type: 'h3', text: 'Breaks and role reversal' },
              {
                type: 'p',
                text:
                  'If support breaks, it can become resistance. If resistance breaks, it can become support in the short term.',
              },
              { type: 'image', caption: 'S/R zones (placeholder)' },
              { type: 'h3', text: 'Support & Resistance tips' },
              {
                type: 'ol',
                items: [
                  'Identify key levels early (first step in price action).',
                  'Use zones/areas — not exact lines.',
                  'Don’t trade just because price touched a level; wait for confirmation that supply/demand changed.',
                ],
              },
            ],
          },
          {
            id: 'market-structure',
            title: 'Market Structure',
            readingTime: '10 min',
            blocks: [
              { type: 'h2', text: 'Market Structure' },
              {
                type: 'p',
                text:
                  'Market structure describes the general direction: upward trend, downward trend, or sideways (range). Determining trend direction is important for maximizing trade success.',
              },
              { type: 'h3', text: 'Upward trend' },
              {
                type: 'p',
                text:
                  'A sustained period of rising prices (bull market). Often driven by strong demand and favorable conditions.',
              },
              { type: 'h3', text: 'Downward trend' },
              {
                type: 'p',
                text:
                  'A sustained period of falling prices (bear market). Often driven by weak demand or unfavorable conditions.',
              },
              { type: 'h3', text: 'Sideways trend' },
              {
                type: 'p',
                text:
                  'A range-bound period of relatively stable prices with no clear direction.',
              },
              { type: 'image', caption: 'Up/Down/Sideways examples (placeholder)' },
            ],
          },
          {
            id: 'fibonacci',
            title: 'Fibonacci',
            readingTime: '10 min',
            blocks: [
              { type: 'h2', text: 'Fibonacci' },
              {
                type: 'p',
                text:
                  'Fibonacci retracement levels help identify potential support/resistance where price may find a floor/ceiling after a significant move.',
              },
              { type: 'h3', text: 'Retracement levels' },
              {
                type: 'ul',
                items: ['23.6%', '38.2%', '50%', '61.8%', '78.6%'],
              },
              { type: 'image', caption: 'Fibonacci retracement example (placeholder)' },
              { type: 'h3', text: 'As a trend-trading strategy' },
              {
                type: 'p',
                text:
                  'Traders observe a retracement within a trend and attempt low-risk entries in the direction of the original trend using fib levels.',
              },
            ],
          },
          {
            id: 'indicators-grouped',
            title: 'Indicators (Grouped)',
            readingTime: '18 min',
            blocks: [
              { type: 'h2', text: 'Indicators' },
              {
                type: 'p',
                text:
                  'Technical indicators are signals produced by price, volume, and/or open interest. Use them to confirm structure and levels.',
              },
              { type: 'h3', text: 'Moving Averages (MA)' },
              {
                type: 'p',
                text:
                  'Moving averages smooth price data with a constantly updated average price. SMAs use simple averaging; EMAs weigh recent prices more heavily.',
              },
              {
                type: 'ul',
                items: [
                  'Swing: 200 MA (4H–1D)',
                  'Day: 50 MA (30m–1H)',
                  'Scalp: 20 MA (1m–15m)',
                ],
              },
              { type: 'h3', text: 'Golden Cross / Death Cross' },
              {
                type: 'p',
                text:
                  'Golden cross: short-term MA crosses above long-term MA (bullish). Death cross: short-term MA crosses below long-term MA (bearish).',
              },
              { type: 'h3', text: 'Bollinger Bands' },
              {
                type: 'ol',
                items: [
                  'Middle band: SMA (usually 20)',
                  'Upper/lower: typically 2 standard deviations',
                  'Bands widen/narrow with volatility (squeeze = less volatility)',
                  'Upper band touch can be overbought; lower band touch can be oversold',
                ],
              },
              { type: 'h3', text: 'MACD' },
              {
                type: 'ol',
                items: [
                  'MACD line = 12 EMA − 26 EMA',
                  'Signal line = 9 EMA of MACD',
                  'Best used with daily periods (26/12/9 default)',
                ],
              },
              { type: 'h3', text: 'RSI + Divergences' },
              {
                type: 'ol',
                items: [
                  'RSI > 70 often overbought; RSI < 30 often oversold',
                  'RSI works best in ranges rather than trending markets',
                  'Divergence happens when price moves opposite to RSI',
                ],
              },
              {
                type: 'ul',
                items: [
                  'Regular bullish divergence',
                  'Regular bearish divergence',
                  'Hidden bullish divergence',
                  'Hidden bearish divergence',
                ],
              },
              { type: 'h3', text: 'MFI, Stochastic, Volume' },
              {
                type: 'ul',
                items: [
                  'MFI: overbought > 80, oversold < 20 (sometimes 90/10).',
                  'Stochastic: ranges 0–100; above 80 overbought, below 20 oversold.',
                  'Volume: higher volume makes a move more significant; low volume makes it less significant.',
                ],
              },
              { type: 'image', caption: 'Indicator panel placeholders' },
            ],
          },
        ],
      },
    ],
  },
};

export function getModule(slug) {
  return academyLessons[slug] || null;
}

export function getLesson(moduleSlug, lessonId) {
  const module = getModule(moduleSlug);
  if (!module) return null;
  for (const topic of module.topics) {
    const lesson = topic.lessons.find((l) => l.id === lessonId);
    if (lesson) return { module, topic, lesson };
  }
  return null;
}


