import { useState, FormEvent } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Plus, Star } from 'lucide-react';
import useLocalStorage from '../hooks/useLocalStorage';
import { faker } from '@faker-js/faker';
import WatchlistTable from '../components/dashboard/WatchlistTable';

export interface WatchlistItem {
  id: string;
  ticker: string;
  name: string;
  currentPrice: number;
  changePercent: number;
}

const createMockWatchlistItem = (ticker: string): WatchlistItem => ({
  id: faker.string.uuid(),
  ticker: ticker.toUpperCase(),
  name: faker.company.name(),
  currentPrice: parseFloat(faker.finance.amount(100, 1000, 2)),
  changePercent: parseFloat(faker.number.float({ min: -5, max: 5, precision: 0.01 }).toFixed(2)),
});

const initialWatchlist: WatchlistItem[] = [
  createMockWatchlistItem('GOOGL'),
  createMockWatchlistItem('TSLA'),
  createMockWatchlistItem('AMZN'),
];

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useLocalStorage<WatchlistItem[]>('finwise-watchlist', initialWatchlist);
  const [newTicker, setNewTicker] = useState('');

  const handleAddStock = (e: FormEvent) => {
    e.preventDefault();
    if (newTicker.trim() && !watchlist.some(item => item.ticker === newTicker.toUpperCase())) {
      const newItem = createMockWatchlistItem(newTicker);
      setWatchlist([...watchlist, newItem]);
      setNewTicker('');
    }
  };

  const handleRemoveStock = (id: string) => {
    setWatchlist(watchlist.filter(item => item.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <header className="h-16 flex-shrink-0 flex items-center justify-between px-6 border-b border-card-border">
          <h1 className="text-xl font-semibold text-text-primary flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            My Watchlist
          </h1>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 bg-card border border-card-border rounded-xl p-4">
            <form onSubmit={handleAddStock} className="flex flex-col sm:flex-row items-center gap-3">
              <label htmlFor="ticker-input" className="sr-only">Add Stock Ticker</label>
              <Input
                id="ticker-input"
                type="text"
                value={newTicker}
                onChange={(e) => setNewTicker(e.target.value)}
                placeholder="Enter stock ticker (e.g., AAPL)"
                className="flex-1"
              />
              <Button type="submit" className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Add to Watchlist
              </Button>
            </form>
          </div>
          
          <WatchlistTable watchlist={watchlist} onRemove={handleRemoveStock} />

        </main>
      </div>
    </DashboardLayout>
  );
};

export default WatchlistPage;
