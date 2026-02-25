import { Filter, Search } from 'lucide-react';

export default function Transactions() {
  return (
    <div className="animate-fade-in card full-height-card">
      <div className="card-header border-bottom pb-4 mb-4">
        <div>
           <h1 className="page-title">All Transactions</h1>
           <p className="page-subtitle">View and manage your entire transaction history.</p>
        </div>
        <div className="header-actions">
           <div className="search-bar border">
             <Search size={16} className="search-icon" />
             <input type="text" placeholder="Search..." />
           </div>
           <button className="btn btn-outline"><Filter size={16} /> Filter</button>
        </div>
      </div>
      <div className="empty-state">
         <p className="text-muted">This is a full page view simulating the Transactions route.</p>
         <p className="text-muted text-sm mt-2">The table component from the Dashboard would normally be re-used here with pagination.</p>
      </div>
    </div>
  );
}