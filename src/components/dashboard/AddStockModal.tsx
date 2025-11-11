import { useState, FormEvent } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AddStockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddStock: (ticker: string, quantity: number, price: number) => void;
}

const AddStockModal = ({ isOpen, onClose, onAddStock }: AddStockModalProps) => {
  const [ticker, setTicker] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ticker && quantity && price) {
      onAddStock(ticker.toUpperCase(), parseFloat(quantity), parseFloat(price));
      setTicker('');
      setQuantity('');
      setPrice('');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-card rounded-xl border border-card-border shadow-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-card-border">
              <h2 className="text-xl font-semibold text-text-primary">Add New Stock</h2>
              <button onClick={onClose} className="p-1.5 rounded-full hover:bg-card-border transition-colors">
                <X className="h-5 w-5 text-text-secondary" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Stock Ticker</label>
                <Input placeholder="e.g., AAPL" value={ticker} onChange={(e) => setTicker(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Quantity</label>
                <Input type="number" placeholder="e.g., 10" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Purchase Price</label>
                <Input type="number" placeholder="e.g., 150.75" value={price} onChange={(e) => setPrice(e.target.value)} required />
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full">Add to Portfolio</Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddStockModal;
