import { FileBarChart } from 'lucide-react';

export default function Reports() {
  return (
    <div className="animate-fade-in card full-height-card">
       <div className="card-header border-bottom pb-4 mb-4">
        <div>
           <h1 className="page-title">Financial Reports</h1>
           <p className="page-subtitle">Generate P&L, Balance Sheets, and Cash Flow statements.</p>
        </div>
      </div>
      <div className="empty-state">
         <FileBarChart size={48} className="text-muted mb-4 opacity-50" />
         <h3>No reports generated yet</h3>
         <p className="text-muted mt-2">Select a date range and report type to generate your first financial document.</p>
         <button className="btn btn-primary mt-6">Generate Report</button>
      </div>
    </div>
  );
}