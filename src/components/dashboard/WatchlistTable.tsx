import { WatchlistItem } from '../../pages/WatchlistPage';
import { Trash2 } from 'lucide-react';

interface WatchlistTableProps {
  watchlist: WatchlistItem[];
  onRemove: (id: string) => void;
}

const WatchlistTable = ({ watchlist, onRemove }: WatchlistTableProps) => {
  if (watchlist.length === 0) {
    return (
      <div className="text-center py-16 bg-card border border-card-border rounded-xl">
        <h3 className="text-lg font-medium text-text-primary">Your watchlist is empty.</h3>
        <p className="text-text-secondary mt-2">Add stocks using the form above to start tracking them.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-card-border">
          <thead className="bg-card/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Stock</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Current Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Today's Change</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-tertiary uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {watchlist.map((item) => {
              const isProfit = item.changePercent >= 0;
              return (
                <tr key={item.id} className="hover:bg-card/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-semibold text-text-primary">{item.ticker}</div>
                    <div className="text-sm text-text-secondary">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary font-medium">${item.currentPrice.toFixed(2)}</td>
                  <td className={`px-6 py-4 whitespace-nowrap font-medium ${isProfit ? 'text-green-500' : 'text-red-500'}`}>
                    {isProfit ? '+' : ''}{item.changePercent.toFixed(2)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => onRemove(item.id)} 
                      className="p-2 text-text-tertiary hover:text-red-500 rounded-full hover:bg-red-500/10 transition-colors"
                      aria-label={`Remove ${item.ticker} from watchlist`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
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

export default WatchlistTable;
