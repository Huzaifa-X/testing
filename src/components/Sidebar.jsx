import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, FileBarChart, Settings, Wallet, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo"><Wallet size={24} color="white" /></div>
        <div className="brand-text">FinanceOS</div>
      </div>
      
      <nav className="nav-menu">
        <div className="nav-group">
          <h4 className="nav-title">Menu</h4>
          <NavLink to="/dashboard" className="nav-item">
            <LayoutDashboard size={20} /> <span>Dashboard</span>
          </NavLink>
          <NavLink to="/transactions" className="nav-item">
            <Receipt size={20} /> <span>Transactions</span>
          </NavLink>
          <NavLink to="/reports" className="nav-item">
            <FileBarChart size={20} /> <span>Reports</span>
          </NavLink>
        </div>
        
        <div className="nav-group mt-auto">
          <NavLink to="/settings" className="nav-item">
            <Settings size={20} /> <span>Settings</span>
          </NavLink>
          <button className="nav-item logout-btn">
            <LogOut size={20} /> <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}