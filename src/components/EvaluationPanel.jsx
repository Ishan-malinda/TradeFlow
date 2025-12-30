import React from 'react';

const EvaluationPanel = ({ evaluation }) => {
  const stats = evaluation || {
    totalTrades: 97,
    avgProfitPerDay: 44.67,
    biggestWinner: 451.21,
    biggestLoser: -402.31,
    totalFees: 320.41,
    avgHoldTime: 26.1,
    winrateWithoutBE: 56.38,
    roi: 12.15,
    maxDrawdown: 4.47,
    winningDays: 45,
    losingDays: 35,
    tradesPerDay: 1.20,
    tradesPerWeek: 4.04,
    currentStreak: 'LLLLW',
  };

  const formatValue = (value, prefix = '', suffix = '') => {
    if (typeof value === 'number') {
      if (value < 0) {
        return `${prefix}${value.toFixed(2)}${suffix}`;
      }
      return `${prefix}${value.toFixed(2)}${suffix}`;
    }
    return `${prefix}${value}${suffix}`;
  };

  return (
    <div className="evaluation-panel">
      <div className="evaluation-panel__alert">
        <span className="evaluation-panel__alert-icon">⚠</span>
        <span>Edge Finder detected 3 issues in your trading</span>
        <span className="evaluation-panel__alert-arrow">→</span>
      </div>

      <div className="evaluation-panel__metrics">
        <div className="evaluation-panel__metric">
          <p className="evaluation-panel__metric-label">Avg P&L</p>
          <h3 className="evaluation-panel__metric-value">
            {formatValue(stats.avgProfitPerDay, '$')}
          </h3>
          <p className="evaluation-panel__metric-range">
            ${stats.biggestWinner?.toFixed(2) || '451.21'} - ${Math.abs(stats.biggestLoser || 402.31).toFixed(2)}
          </p>
        </div>

        <div className="evaluation-panel__metric">
          <p className="evaluation-panel__metric-label">Profit Factor</p>
          <h3 className="evaluation-panel__metric-value">1.71</h3>
        </div>

        <div className="evaluation-panel__metric">
          <p className="evaluation-panel__metric-label">EW Score</p>
          <h3 className="evaluation-panel__metric-value">73.86</h3>
        </div>
      </div>

      <div className="evaluation-panel__section">
        <h3 className="evaluation-panel__section-title">Evaluation</h3>
        <div className="evaluation-panel__stats">
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Total Number of Trades:</span>
            <span className="evaluation-panel__stat-value">{stats.totalTrades}</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Avg. Profit per Trading Day:</span>
            <span className="evaluation-panel__stat-value">{formatValue(stats.avgProfitPerDay, '$')}</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Biggest Winner:</span>
            <span className="evaluation-panel__stat-value evaluation-panel__stat-value--green">
              {formatValue(stats.biggestWinner, '$')}
            </span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Biggest Loser:</span>
            <span className="evaluation-panel__stat-value evaluation-panel__stat-value--red">
              {formatValue(stats.biggestLoser, '$')}
            </span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Total Fees:</span>
            <span className="evaluation-panel__stat-value">{formatValue(stats.totalFees, '$')}</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Avg. Hold Time (Hours):</span>
            <span className="evaluation-panel__stat-value">{stats.avgHoldTime}h</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Winrate w/o BE:</span>
            <span className="evaluation-panel__stat-value">{stats.winrateWithoutBE}%</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">ROI:</span>
            <span className="evaluation-panel__stat-value">{stats.roi}%</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Max Drawdown:</span>
            <span className="evaluation-panel__stat-value">{stats.maxDrawdown}%</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Winning / Losing Days:</span>
            <span className="evaluation-panel__stat-value">{stats.winningDays} / {stats.losingDays}</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Trades Per Day / Week:</span>
            <span className="evaluation-panel__stat-value">{stats.tradesPerDay} / {stats.tradesPerWeek}</span>
          </div>
          <div className="evaluation-panel__stat-row">
            <span className="evaluation-panel__stat-label">Current Streak:</span>
            <span className="evaluation-panel__stat-value">{stats.currentStreak}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationPanel;

