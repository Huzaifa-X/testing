import { Bell, Search, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="top-header">
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search transactions, invoices or reports..." />
      </div>
      
      <div className="header-actions">
        <button className="btn btn-primary shadow-sm">
          <Plus size={16} /> New Transaction
        </button>
        <div className="action-divider"></div>
        <button className="icon-btn relative">
          <Bell size={20} />
          <span className="badge">3</span>
        </button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" />
          <div className="user-info">
            <span className="user-name">Alex Morgan</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}