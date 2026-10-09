import { NavLink, Link } from 'react-router-dom';
import { GraduationCap, X, LogOut } from 'lucide-react';

export default function Sidebar({ items, roleLabel, open, onClose }) {
  return (
    <>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <Link to="/" className="logo" style={{ color: '#fff' }}>
            <span className="logo-mark"><GraduationCap size={18} /></span>
            SmartLearn
          </Link>
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu"><X size={20} /></button>
        </div>
        <div style={{ padding: '0 22px 14px', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          {roleLabel}
        </div>
        <nav className="sidebar-nav">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <item.icon size={17} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-foot">
          <Link to="/login" className="sidebar-link">
            <LogOut size={17} />
            Logout
          </Link>
        </div>
      </aside>
      <div className={`sidebar-scrim ${open ? 'open' : ''}`} onClick={onClose} />
    </>
  );
}
