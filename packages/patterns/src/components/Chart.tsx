import { useInterval } from '@wheel/shared';
import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartData } from './types';

export interface ChartProps {
  data: ChartData[];
  type: 'line' | 'bar' | 'pie' | 'scatter' | 'area';
  updateInterval?: number;
}

export const Chart: React.FC<ChartProps> = ({ data, type, updateInterval }) => {
  const [chartData, setChartData] = useState(data);

  useInterval(() => {
    setChartData(
      chartData.map((item) => ({
        ...item,
        value: item.value + Math.floor(Math.random() * 100),
      }))
    );
  }, updateInterval || null);

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              fill="#8884d8"
              isAnimationActive={false}
            />
            <Tooltip />
          </PieChart>
        );
      case 'scatter':
        return (
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="category" dataKey="name" name="name" />
            <YAxis type="number" dataKey="value" name="value" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={chartData} fill="#8884d8" />
          </ScatterChart>
        );
      case 'area':
        return (
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        );
      default:
        throw new Error(`Invalid chart type: ${type}`);
    }
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      {renderChart()}
    </ResponsiveContainer>
  );
};
