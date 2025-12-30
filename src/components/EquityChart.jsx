import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const EquityChart = ({ data }) => {
  // Mock data - in real app, this would come from props or API
  const chartData = data || [
    { name: 'Jan', equity: 30000 },
    { name: 'Feb', equity: 30500 },
    { name: 'Mar', equity: 31000 },
    { name: 'Apr', equity: 31500 },
    { name: 'May', equity: 32000 },
    { name: 'Jun', equity: 32500 },
    { name: 'Jul', equity: 33000 },
    { name: 'Aug', equity: 33500 },
    { name: 'Sep', equity: 34000 },
    { name: 'Oct', equity: 33617 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="equity-chart__tooltip">
          <p className="equity-chart__tooltip-label">{`Equity: $${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="equity-chart">
      <h3 className="equity-chart__title">Equity Graph</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="equity"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorEquity)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquityChart;

