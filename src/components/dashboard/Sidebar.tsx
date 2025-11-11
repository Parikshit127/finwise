import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Zap, LayoutDashboard, Bot, Star, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'AI Chat', icon: Bot, path: '/ai-chat' },
  { name: 'Watchlist', icon: Star, path: '/watchlist' },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear tokens and state
    navigate('/');
  };

  const activeLinkStyle = {
    backgroundColor: '#3B82F6', // primary color
    color: '#F0F6FC' // text-primary
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-card border-r border-card-border flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-card-border px-4">
        <Link to="/dashboard" className="flex items-center gap-2">
          <Zap className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-text-primary">FinWise</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-text-secondary hover:bg-primary/20 hover:text-text-primary transition-colors duration-200"
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-card-border">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-text-secondary hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
