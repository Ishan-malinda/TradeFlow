import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from 'recharts';

const PerformanceByInstrument = ({ data }) => {
  const chartData = data || [
    { instrument: 'EURUSD', value: 1600 },
    { instrument: 'GBPUSD', value: 1200 },
    { instrument: 'USDJPY', value: 800 },
    { instrument: 'AUDUSD', value: -200 },
    { instrument: 'USDCAD', value: 400 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="performance-chart__tooltip">
          <p className="performance-chart__tooltip-label">
            {`${payload[0].payload.instrument}: $${payload[0].value.toLocaleString()}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="performance-chart">
      <h3 className="performance-chart__title">Performance by Instrument</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="instrument" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={entry.value >= 0 ? '#10b981' : '#ef4444'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const PerformanceByWeekday = ({ data }) => {
  const chartData = data || [
    { day: 'Mon', value: 700 },
    { day: 'Tue', value: 500 },
    { day: 'Wed', value: 600 },
    { day: 'Thu', value: 400 },
    { day: 'Fri', value: 800 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="performance-chart__tooltip">
          <p className="performance-chart__tooltip-label">
            {`${payload[0].payload.day}: $${payload[0].value.toLocaleString()}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="performance-chart">
      <h3 className="performance-chart__title">Performance by Weekday</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="day" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            fill="#10b981"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { PerformanceByInstrument, PerformanceByWeekday };

