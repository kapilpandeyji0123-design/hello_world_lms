import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, Search } from 'lucide-react';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ items, roleLabel, userName, userInitials, notifPath, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell">
      <Sidebar items={items} roleLabel={roleLabel} open={open} onClose={() => setOpen(false)} />
      <div className="main-col">
        <div className="topbar">
          <div className="flex items-center gap-16">
            <button className="topbar-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
            <div className="search-pill" style={{ minWidth: 260 }}>
              <Search size={14} />
              <input placeholder="Search..." />
            </div>
          </div>
          <div className="flex items-center gap-16">
            {notifPath && (
              <Link to={notifPath} className="icon-btn" aria-label="Notifications">
                <Bell size={16} />
              </Link>
            )}
            <div className="avatar">{userInitials}</div>
          </div>
        </div>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
