import React from 'react';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer,
  Tooltip 
} from 'recharts';

const StatsCards = ({ stats }) => {
  const netReturnData = [
    { value: 3200 },
    { value: 3300 },
    { value: 3400 },
    { value: 3500 },
    { value: 3617 },
  ];

  return (
    <div className="stats-cards">
      <div className="stats-card stats-card--net-return">
        <div className="stats-card__header">
          <p className="stats-card__label">Net Return</p>
          <div className="stats-card__tabs">
            <button className="stats-card__tab active">USD</button>
            <button className="stats-card__tab">Return (%)</button>
            <button className="stats-card__tab">R Multiple</button>
          </div>
        </div>
        <h2 className="stats-card__value stats-card__value--green">
          ${stats?.netReturn?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '3,617.88'}
        </h2>
        <div className="stats-card__chart">
          <ResponsiveContainer width="100%" height={40}>
            <LineChart data={netReturnData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={false}
              />
              <Tooltip content={<div />} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="stats-card stats-card--winrate">
        <p className="stats-card__label">Winrate</p>
        <h2 className="stats-card__value">
          {stats?.winrate || '54.64'}%
        </h2>
        <div className="stats-card__gauge">
          <div className="stats-card__gauge-segment stats-card__gauge-segment--green" style={{ width: '53%' }}></div>
          <div className="stats-card__gauge-segment stats-card__gauge-segment--yellow" style={{ width: '3%' }}></div>
          <div className="stats-card__gauge-segment stats-card__gauge-segment--red" style={{ width: '41%' }}></div>
        </div>
        <div className="stats-card__legend">
          <span className="stats-card__legend-item">
            <span className="stats-card__legend-color stats-card__legend-color--green"></span>
            Win: 53
          </span>
          <span className="stats-card__legend-item">
            <span className="stats-card__legend-color stats-card__legend-color--yellow"></span>
            BE: 3
          </span>
          <span className="stats-card__legend-item">
            <span className="stats-card__legend-color stats-card__legend-color--red"></span>
            Loss: 41
          </span>
        </div>
      </div>

      <div className="stats-card stats-card--profit-factor">
        <p className="stats-card__label">Profit Factor</p>
        <h2 className="stats-card__value">{stats?.profitFactor || '1.71'}</h2>
        <div className="stats-card__indicator">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`stats-card__indicator-box ${
                i <= 3 ? 'stats-card__indicator-box--active' : ''
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="stats-card stats-card--ew-score">
        <p className="stats-card__label">EW Score</p>
        <h2 className="stats-card__value">{stats?.ewScore || '73.86'}</h2>
        <div className="stats-card__circular-gauge">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle
              cx="30"
              cy="30"
              r="25"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="6"
            />
            <circle
              cx="30"
              cy="30"
              r="25"
              fill="none"
              stroke="#10b981"
              strokeWidth="6"
              strokeDasharray={`${(73.86 / 100) * 157} 157`}
              strokeDashoffset="39.25"
              transform="rotate(-90 30 30)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;

