import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GraduationCap, Search, Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-mark"><GraduationCap size={18} /></span>
          SmartLearn
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="search-pill">
            <Search size={14} />
            <input placeholder="Search courses..." />
          </div>
          <Link to="/login" className="btn btn-outline btn-sm">Log In</Link>
          <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="nav-link" onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link to="/login" className="btn btn-outline btn-sm mt-8" onClick={() => setOpen(false)}>Log In</Link>
        <Link to="/register" className="btn btn-primary btn-sm mt-8" onClick={() => setOpen(false)}>Sign Up</Link>
      </div>
    </header>
  );
}
