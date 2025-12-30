import React from 'react';
import JournalSidebar from '../components/JournalSidebar';
import StatsCards from '../components/StatsCards';
import ProfitCalendar from '../components/ProfitCalendar';
import EquityChart from '../components/EquityChart';
import EvaluationPanel from '../components/EvaluationPanel';
import { PerformanceByInstrument, PerformanceByWeekday } from '../components/PerformanceCharts';
import Footer from '../components/Footer';

const JournalDashboard = () => {
  // Mock data - in real app, this would come from API or state management
  const stats = {
    netReturn: 3617.88,
    winrate: 54.64,
    profitFactor: 1.71,
    ewScore: 73.86,
  };

  const evaluation = {
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

  return (
    <>
      <div className="journal-page">
        <JournalSidebar />
        <main className="journal-main">
          <div className="journal-main__header">
            <div className="journal-main__breadcrumbs">
              <span>Basic Filters</span>
              <span>→</span>
              <span>Advanced Filters</span>
              <span className="journal-main__settings-icon">⚙</span>
            </div>
            <div className="journal-main__controls">
              <input 
                type="text" 
                placeholder="Search by Trade ID" 
                className="journal-main__search"
              />
              <select className="journal-main__select">
                <option>Trading Journal</option>
              </select>
              <button className="journal-main__icon-btn">🔔</button>
              <button className="journal-main__icon-btn">👤</button>
              <button className="journal-main__icon-btn">?</button>
            </div>
          </div>

          <div className="journal-main__content">
            {/* Stats Cards Row */}
            <StatsCards stats={stats} />

            {/* Main Grid: Calendar + Evaluation Panel */}
            <div className="journal-main__grid">
              <div className="journal-main__grid-left">
                <ProfitCalendar />
                <div className="journal-main__spacer"></div>
                <PerformanceByInstrument />
              </div>
              <div className="journal-main__grid-right">
                <EvaluationPanel evaluation={evaluation} />
              </div>
            </div>

            {/* Bottom Row: Weekday Performance + Equity Chart */}
            <div className="journal-main__bottom-grid">
              <div className="journal-main__bottom-left">
                <PerformanceByWeekday />
              </div>
              <div className="journal-main__bottom-right">
                <EquityChart />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default JournalDashboard;

