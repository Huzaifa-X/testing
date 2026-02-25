import { ArrowUpRight, ArrowDownRight, DollarSign, CreditCard, TrendingUp, Download, Eye } from 'lucide-react';

const recentTransactions = [
  { id: 'TRX-8572', date: 'Oct 24, 2023', name: 'Stripe Payout', category: 'Income', amount: '+$4,500.00', status: 'Completed' },
  { id: 'TRX-8571', date: 'Oct 23, 2023', name: 'AWS Services', category: 'Infrastructure', amount: '-$342.50', status: 'Completed' },
  { id: 'TRX-8570', date: 'Oct 21, 2023', name: 'WeWork Office', category: 'Real Estate', amount: '-$1,200.00', status: 'Pending' },
  { id: 'TRX-8569', date: 'Oct 20, 2023', name: 'Client Retainer', category: 'Income', amount: '+$2,500.00', status: 'Completed' }
];

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Financial Overview</h1>
          <p className="page-subtitle">Track your revenue and expenses in real-time.</p>
        </div>
        <div className="header-buttons">
          <button className="btn btn-outline"><Download size={16} /> Export CSV</button>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card card">
          <div className="kpi-header">
            <div className="kpi-icon-wrapper bg-blue-subtle text-blue">
              <DollarSign size={20} />
            </div>
            <span className="badge-trend positive"><ArrowUpRight size={14} /> 12.5%</span>
          </div>
          <div className="kpi-body">
            <span className="kpi-label">Total Revenue</span>
            <h2 className="kpi-value">$124,563.00</h2>
          </div>
        </div>
        
        <div className="kpi-card card">
          <div className="kpi-header">
            <div className="kpi-icon-wrapper bg-rose-subtle text-rose">
              <CreditCard size={20} />
            </div>
            <span className="badge-trend negative"><ArrowUpRight size={14} /> 4.2%</span>
          </div>
          <div className="kpi-body">
            <span className="kpi-label">Total Expenses</span>
            <h2 className="kpi-value">$42,120.50</h2>
          </div>
        </div>

        <div className="kpi-card card">
          <div className="kpi-header">
            <div className="kpi-icon-wrapper bg-emerald-subtle text-emerald">
              <TrendingUp size={20} />
            </div>
            <span className="badge-trend positive"><ArrowUpRight size={14} /> 8.4%</span>
          </div>
          <div className="kpi-body">
            <span className="kpi-label">Net Profit</span>
            <h2 className="kpi-value">$82,442.50</h2>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="chart-section card lg-col-span-2">
          <div className="card-header">
            <h3 className="card-title">Cash Flow</h3>
            <select className="select-sm">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="chart-container mock-bar-chart">
             {/* Mock CSS Bar Chart */}
             <div className="y-axis">
               <span>$50k</span><span>$40k</span><span>$30k</span><span>$20k</span><span>$10k</span><span>$0</span>
             </div>
             <div className="bars-area">
               {[
                 { m: 'May', i: 60, e: 40 },
                 { m: 'Jun', i: 70, e: 45 },
                 { m: 'Jul', i: 85, e: 50 },
                 { m: 'Aug', i: 65, e: 55 },
                 { m: 'Sep', i: 90, e: 40 },
                 { m: 'Oct', i: 100, e: 35 }
               ].map((data, idx) => (
                 <div key={idx} className="bar-group">
                   <div className="bar income" style={{ height: `${data.i}%`}}></div>
                   <div className="bar expense" style={{ height: `${data.e}%`}}></div>
                   <span className="bar-label">{data.m}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        <div className="recent-section card lg-col-span-3">
          <div className="card-header">
            <h3 className="card-title">Recent Transactions</h3>
            <button className="btn-link">View All</button>
          </div>
          
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th className="text-right">Amount</th>
                  <th className="text-center">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((trx) => (
                  <tr key={trx.id}>
                    <td className="font-medium text-muted">{trx.id}</td>
                    <td>{trx.date}</td>
                    <td className="font-semibold">{trx.name}</td>
                    <td><span className="category-pill">{trx.category}</span></td>
                    <td className={`text-right font-semibold ${trx.amount.startsWith('+') ? 'text-emerald' : 'text-main'}`}>
                      {trx.amount}
                    </td>
                    <td className="text-center">
                      <span className={`status-badge ${trx.status.toLowerCase()}`}>{trx.status}</span>
                    </td>
                    <td className="text-right">
                      <button className="icon-btn-sm"><Eye size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}