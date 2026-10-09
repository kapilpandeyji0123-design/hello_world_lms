import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const socials = [
  { label: 'f', name: 'Facebook' },
  { label: 'x', name: 'Twitter / X' },
  { label: 'ig', name: 'Instagram' },
  { label: 'in', name: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: '#fff', marginBottom: 14 }}>
              <span className="logo-mark"><GraduationCap size={18} /></span>
              SmartLearn
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, maxWidth: 260 }}>
              A modern learning platform helping students build real skills through expert-led courses and AI-powered guidance.
            </p>
          </div>
          <div>
            <h5>Platform</h5>
            <ul>
              <li><Link to="/about">About SmartLearn</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/courses">Categories</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>For Students</h5>
            <ul>
              <li><Link to="/student/dashboard">Dashboard</Link></li>
              <li><Link to="/student/certificates">Certificates</Link></li>
              <li><Link to="/student/ai-assistant">AI Assistant</Link></li>
              <li><Link to="/register">Create Account</Link></li>
            </ul>
          </div>
          <div>
            <h5>For Instructors</h5>
            <ul>
              <li><Link to="/instructor/dashboard">Instructor Dashboard</Link></li>
              <li><Link to="/instructor/create-course">Create a Course</Link></li>
              <li><Link to="/instructor/analytics">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><Link to="/about">Privacy Policy</Link></li>
              <li><Link to="/about">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SmartLearn. All rights reserved.</span>
          <div className="social-row">
            {socials.map((s) => (
              <a href="#" key={s.name} aria-label={s.name} style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', color: '#fff' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
