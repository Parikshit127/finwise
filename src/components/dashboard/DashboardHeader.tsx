import { Search } from 'lucide-react';
import { Input } from '../ui/Input';

const DashboardHeader = () => {
  return (
    <header className="h-16 flex-shrink-0 flex items-center justify-between px-6 border-b border-card-border">
      <div>
        <h1 className="text-xl font-semibold text-text-primary">Welcome, Investor!</h1>
        <p className="text-sm text-text-tertiary">Here's your portfolio overview for today.</p>
      </div>
      <div className="relative w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
        <Input
          type="search"
          placeholder="Search stocks..."
          className="pl-10"
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
