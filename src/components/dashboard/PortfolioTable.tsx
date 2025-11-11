import { Stock } from '../../data/mockData';
import { Button } from '../ui/Button';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface PortfolioTableProps {
  portfolio: Stock[];
  onTrade: (stockId: string, tradeType: 'buy' | 'sell') => void;
}

const PortfolioTable = ({ portfolio, onTrade }: PortfolioTableProps) => {
  const calculatePL = (stock: Stock) => {
    return (stock.currentPrice - stock.avgPrice) * stock.quantity;
  };

  const calculatePLPercentage = (stock: Stock) => {
    return ((stock.currentPrice - stock.avgPrice) / stock.avgPrice) * 100;
  };

  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-card-border">
          <thead className="bg-card/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Stock</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Quantity</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Avg. Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Current Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">P/L</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {portfolio.map((stock) => {
              const pl = calculatePL(stock);
              const plPercent = calculatePLPercentage(stock);
              const isProfit = pl >= 0;

              return (
                <tr key={stock.id} className="hover:bg-card/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-semibold text-text-primary">{stock.ticker}</div>
                    <div className="text-sm text-text-secondary">{stock.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary">{stock.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary">${stock.avgPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary">${stock.currentPrice.toFixed(2)}</td>
                  <td className={`px-6 py-4 whitespace-nowrap font-medium ${isProfit ? 'text-green-500' : 'text-red-500'}`}>
                    <div>{pl.toFixed(2)}</div>
                    <div className="text-sm">{plPercent.toFixed(2)}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button onClick={() => onTrade(stock.id, 'buy')} className="p-1.5 text-text-tertiary hover:text-green-500 rounded-full hover:bg-green-500/10 transition-colors"><PlusCircle className="h-5 w-5"/></button>
                      <button onClick={() => onTrade(stock.id, 'sell')} className="p-1.5 text-text-tertiary hover:text-red-500 rounded-full hover:bg-red-500/10 transition-colors"><MinusCircle className="h-5 w-5"/></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioTable;
