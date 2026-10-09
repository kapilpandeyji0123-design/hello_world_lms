import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Login() {
  return (
    <div className="auth-shell">
      <div className="auth-visual">
        <Link to="/" className="logo" style={{ color: '#fff', position: 'relative' }}>
          <span className="logo-mark"><GraduationCap size={18} /></span>
          SmartLearn
        </Link>
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 30, color: '#fff', maxWidth: 380 }}>Welcome back. Your next lesson is waiting.</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 14, maxWidth: 360, lineHeight: 1.6 }}>
            Pick up where you left off, track your progress and keep building real skills.
          </p>
        </div>
        <span style={{ position: 'relative', color: 'rgba(255,255,255,0.4)', fontSize: 12.5 }}>© 2026 SmartLearn</span>
      </div>
      <div className="auth-form-side">
        <div className="auth-box">
          <h2 style={{ fontSize: 26 }}>Log in to SmartLearn</h2>
          <p className="text-soft mt-8" style={{ marginBottom: 28 }}>Continue your learning journey.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="field-row">
              <label className="checkbox-row"><input type="checkbox" /> Remember me</label>
              <Link to="#" className="text-soft" style={{ fontWeight: 600 }}>Forgot password?</Link>
            </div>
            <Link to="/student/dashboard" className="btn btn-primary btn-block">Log In</Link>
          </form>
          <p className="text-soft mt-24" style={{ textAlign: 'center', fontSize: 13.5 }}>
            Don't have an account? <Link to="/register" style={{ color: 'var(--brand)', fontWeight: 600 }}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
