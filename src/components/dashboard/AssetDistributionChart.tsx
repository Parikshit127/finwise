import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Stock } from '../../data/mockData';

interface AssetDistributionChartProps {
  data: Stock[];
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#6366F1'];

const AssetDistributionChart = ({ data }: AssetDistributionChartProps) => {
  const chartData = data.map(stock => ({
    name: stock.ticker,
    value: stock.quantity * stock.currentPrice,
  }));

  return (
    <div className="bg-card border border-card-border rounded-xl p-6 h-full">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Asset Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
                backgroundColor: '#161B22', // card
                borderColor: '#30363D', // card-border
                color: '#F0F6FC' // text-primary
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetDistributionChart;
