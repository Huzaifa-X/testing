import { Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  return (
    <div className="animate-fade-in card full-height-card">
      <div className="card-header border-bottom pb-4 mb-4">
        <div>
           <h1 className="page-title">Account Settings</h1>
           <p className="page-subtitle">Manage company details, billing, and team members.</p>
        </div>
      </div>
      <div className="settings-grid">
         <div className="settings-nav">
            <button className="settings-tab active">Company Profile</button>
            <button className="settings-tab">Bank Accounts</button>
            <button className="settings-tab">Team Members</button>
            <button className="settings-tab">Notifications</button>
         </div>
         <div className="settings-content">
            <h3 className="mb-4">Company Profile</h3>
            <div className="form-group">
               <label>Company Name</label>
               <input type="text" defaultValue="Acme Corp" className="input" />
            </div>
            <div className="form-group mt-4">
               <label>Tax ID / EIN</label>
               <input type="text" defaultValue="XX-XXXXXXX" className="input" />
            </div>
            <button className="btn btn-primary mt-6">Save Changes</button>
         </div>
      </div>
    </div>
  );
}