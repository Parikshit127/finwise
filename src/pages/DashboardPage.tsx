import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import PortfolioTable from '../components/dashboard/PortfolioTable';
import AssetDistributionChart from '../components/dashboard/AssetDistributionChart';
import AddStockModal from '../components/dashboard/AddStockModal';
import { mockPortfolio, Stock } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';
import { faker } from '@faker-js/faker';

const DashboardPage = () => {
  const [portfolio, setPortfolio] = useState<Stock[]>(mockPortfolio);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrade = (stockId: string, tradeType: 'buy' | 'sell') => {
    setPortfolio(prev =>
      prev.map(stock => {
        if (stock.id === stockId) {
          const newQuantity = tradeType === 'buy' ? stock.quantity + 1 : Math.max(0, stock.quantity - 1);
          return { ...stock, quantity: newQuantity };
        }
        return stock;
      }).filter(stock => stock.quantity > 0) // Remove stock if quantity is 0
    );
  };

  const handleAddStock = (ticker: string, quantity: number, price: number) => {
    const newStock: Stock = {
      id: faker.string.uuid(),
      ticker,
      name: faker.company.name(),
      quantity,
      avgPrice: price,
      currentPrice: price * (1 + (faker.number.float({ min: -0.05, max: 0.05 }))),
    };
    setPortfolio(prev => [...prev, newStock]);
  };
  
  const totalPortfolioValue = portfolio.reduce((acc, stock) => acc + (stock.currentPrice * stock.quantity), 0);
  const totalPortfolioPL = portfolio.reduce((acc, stock) => acc + (stock.currentPrice - stock.avgPrice) * stock.quantity, 0);
  const totalInvested = portfolio.reduce((acc, stock) => acc + (stock.avgPrice * stock.quantity), 0);
  const totalPLPercentage = totalInvested > 0 ? (totalPortfolioPL / totalInvested) * 100 : 0;
  const isTotalProfit = totalPortfolioPL >= 0;

  return (
    <DashboardLayout>
      <DashboardHeader />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-card border border-card-border rounded-xl p-6">
                <h4 className="text-sm font-medium text-text-tertiary">Portfolio Value</h4>
                <p className="text-2xl font-semibold text-text-primary mt-2">${totalPortfolioValue.toFixed(2)}</p>
             </div>
             <div className="bg-card border border-card-border rounded-xl p-6">
                <h4 className="text-sm font-medium text-text-tertiary">Today's P/L</h4>
                <p className={`text-2xl font-semibold mt-2 ${isTotalProfit ? 'text-green-500' : 'text-red-500'}`}>
                    {isTotalProfit ? '+' : ''}${totalPortfolioPL.toFixed(2)}
                </p>
             </div>
             <div className="bg-card border border-card-border rounded-xl p-6">
                <h4 className="text-sm font-medium text-text-tertiary">Total Return %</h4>
                 <p className={`text-2xl font-semibold mt-2 ${isTotalProfit ? 'text-green-500' : 'text-red-500'}`}>
                    {totalPLPercentage.toFixed(2)}%
                </p>
             </div>
          </div>
          <div className="lg:col-span-1">
            <AssetDistributionChart data={portfolio} />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-text-primary">Your Investments</h2>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Stock
          </Button>
        </div>
        
        <PortfolioTable portfolio={portfolio} onTrade={handleTrade} />
      </main>
      <AddStockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddStock={handleAddStock}
      />
    </DashboardLayout>
  );
};

export default DashboardPage;
