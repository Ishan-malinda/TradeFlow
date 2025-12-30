import React, { useState } from 'react';

const ProfitCalendar = ({ trades = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate calendar days for current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // Mock data for calendar cells
  const getDayData = (day) => {
    // Generate some mock data - in real app, this would come from trades data
    const mockData = [
      { day: 1, profit: 321.93, trades: 1 },
      { day: 2, profit: -402.31, trades: 1 },
      { day: 3, profit: 0, trades: 0 },
      { day: 5, profit: 150.50, trades: 2 },
      { day: 7, profit: -200.00, trades: 1 },
      { day: 10, profit: 450.25, trades: 3 },
      { day: 15, profit: -150.75, trades: 1 },
      { day: 20, profit: 280.00, trades: 2 },
      { day: 25, profit: -100.50, trades: 1 },
      { day: 28, profit: 320.00, trades: 2 },
    ];

    return mockData.find(d => d.day === day) || { day, profit: 0, trades: 0 };
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  return (
    <div className="profit-calendar">
      <div className="profit-calendar__header">
        <h3 className="profit-calendar__title">Profit Calendar</h3>
        <div className="profit-calendar__navigation">
          <button 
            className="profit-calendar__nav-btn"
            onClick={() => navigateMonth(-1)}
          >
            ←
          </button>
          <span className="profit-calendar__month">
            {monthNames[month]} {year}
          </span>
          <button 
            className="profit-calendar__nav-btn"
            onClick={() => navigateMonth(1)}
          >
            →
          </button>
        </div>
      </div>

      <div className="profit-calendar__grid">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="profit-calendar__day-header">
            {day}
          </div>
        ))}

        {/* Empty cells for days before month starts */}
        {Array.from({ length: startingDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} className="profit-calendar__day-cell profit-calendar__day-cell--empty"></div>
        ))}

        {/* Calendar days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dayData = getDayData(day);
          const isProfit = dayData.profit > 0;
          const isLoss = dayData.profit < 0;
          const hasTrades = dayData.trades > 0;

          return (
            <div
              key={day}
              className={`profit-calendar__day-cell ${
                hasTrades 
                  ? isProfit 
                    ? 'profit-calendar__day-cell--profit' 
                    : 'profit-calendar__day-cell--loss'
                  : 'profit-calendar__day-cell--no-trades'
              }`}
            >
              <span className="profit-calendar__day-number">{day}</span>
              {hasTrades && (
                <div className="profit-calendar__day-info">
                  <span className="profit-calendar__day-amount">
                    ${Math.abs(dayData.profit).toFixed(2)}
                  </span>
                  <span className="profit-calendar__day-trades">
                    {dayData.trades} {dayData.trades === 1 ? 'trade' : 'trades'}
                  </span>
                </div>
              )}
              {!hasTrades && (
                <span className="profit-calendar__day-label">No Trades</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfitCalendar;

