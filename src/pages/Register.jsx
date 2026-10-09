import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Register() {
  return (
    <div className="auth-shell">
      <div className="auth-visual">
        <Link to="/" className="logo" style={{ color: '#fff', position: 'relative' }}>
          <span className="logo-mark"><GraduationCap size={18} /></span>
          SmartLearn
        </Link>
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 30, color: '#fff', maxWidth: 380 }}>Join 10,000+ learners building real skills.</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 14, maxWidth: 360, lineHeight: 1.6 }}>
            Create a free account to enroll in courses, track progress and earn certificates.
          </p>
        </div>
        <span style={{ position: 'relative', color: 'rgba(255,255,255,0.4)', fontSize: 12.5 }}>© 2026 SmartLearn</span>
      </div>
      <div className="auth-form-side">
        <div className="auth-box">
          <h2 style={{ fontSize: 26 }}>Create your account</h2>
          <p className="text-soft mt-8" style={{ marginBottom: 28 }}>Start learning in under a minute.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label>Full Name</label>
              <input placeholder="Jordan Lee" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <label className="checkbox-row mt-8" style={{ marginBottom: 20 }}>
              <input type="checkbox" /> I agree to the <Link to="/about" style={{ color: 'var(--brand)' }}>Terms</Link> and <Link to="/about" style={{ color: 'var(--brand)' }}>Privacy Policy</Link>
            </label>
            <Link to="/student/dashboard" className="btn btn-primary btn-block">Create Account</Link>
          </form>
          <p className="text-soft mt-24" style={{ textAlign: 'center', fontSize: 13.5 }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--brand)', fontWeight: 600 }}>Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
