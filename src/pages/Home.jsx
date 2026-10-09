import { Link } from 'react-router-dom';
import {
  Coffee, Code2, BarChart3, BrainCircuit, Cloud, ShieldCheck,
  Users, Sparkles, Award, LineChart, ArrowRight,
} from 'lucide-react';
import PublicLayout from '../layouts/PublicLayout';
import CourseCard from '../components/CourseCard';
import { categories, courses, testimonials } from '../data/mockData';

const catIcons = { Coffee, Code2, BarChart3, BrainCircuit, Cloud, ShieldCheck };

const whyItems = [
  { icon: Users, title: 'Expert Instructors', text: 'Learn from working professionals and industry veterans who build what they teach.' },
  { icon: Sparkles, title: 'Interactive Learning', text: 'Hands-on projects, quizzes and assignments keep every lesson active, not passive.' },
  { icon: BrainCircuit, title: 'AI-Powered Recommendations', text: 'SmartLearn\u2019s assistant suggests the next best course based on how you actually learn.' },
  { icon: Award, title: 'Certificates', text: 'Earn shareable certificates recognized by hiring teams and reviewed by recruiters.' },
  { icon: LineChart, title: 'Progress Tracking', text: 'Visual dashboards show learning hours, quiz scores and completion at a glance.' },
];

export default function Home() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow" style={{ color: '#B9B3F5' }}>SMARTLEARN · EDTECH PLATFORM</span>
            <h1 style={{ marginTop: 14 }}>Learn. Grow. Succeed.</h1>
            <p className="lede">
              Build your skills with expert-led courses, personalized learning paths, and intelligent AI-powered assistance.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-accent">Explore Courses <ArrowRight size={16} /></Link>
              <Link to="/register" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Start Learning</Link>
            </div>
          </div>
          <div className="path-visual">
            <div className="path-card">
              <div className="eyebrow" style={{ marginBottom: 14, color: '#B9B3F5' }}>Your Learning Path</div>
              <div className="path-step">
                <span className="path-dot done" />
                <span style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through', fontSize: 14 }}>Java Fundamentals</span>
              </div>
              <div className="path-step">
                <span className="path-dot done" />
                <span style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through', fontSize: 14 }}>Object-Oriented Programming</span>
              </div>
              <div className="path-step">
                <span className="path-dot active" />
                <span style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Spring Boot &amp; REST APIs</span>
              </div>
              <div className="path-step">
                <span className="path-dot" />
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>Database Integration</span>
              </div>
              <div className="path-step">
                <span className="path-dot" />
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>Capstone Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container">
        <div className="stats-strip">
          <div className="stat-block"><div className="num">10,000+</div><div className="label">Students</div></div>
          <div className="stat-block"><div className="num">500+</div><div className="label">Courses</div></div>
          <div className="stat-block"><div className="num">150+</div><div className="label">Instructors</div></div>
          <div className="stat-block"><div className="num">95%</div><div className="label">Completion Rate</div></div>
        </div>
      </section>

      {/* Categories */}
      <section className="section container">
        <div className="section-head">
          <div>
            <h2>Popular Categories</h2>
            <p className="section-sub">Pick a track and start building real, job-ready skills.</p>
          </div>
        </div>
        <div className="grid-3">
          {categories.map((c) => {
            const Icon = catIcons[c.icon];
            return (
              <Link to="/courses" key={c.id} className="card card-hover category-card">
                <div className="category-icon"><Icon size={20} /></div>
                <div>
                  <h4>{c.name}</h4>
                  <span>{c.count} courses</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular courses */}
      <section className="section container">
        <div className="section-head">
          <div>
            <h2>Popular Courses</h2>
            <p className="section-sub">Loved by thousands of learners this month.</p>
          </div>
          <Link to="/courses" className="btn btn-outline btn-sm">View All Courses</Link>
        </div>
        <div className="grid-4">
          {courses.slice(0, 4).map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>

      {/* Why SmartLearn */}
      <section className="section" style={{ background: 'var(--brand-tint)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">WHY SMARTLEARN</span>
            <h2 style={{ marginTop: 10, fontSize: 32 }}>Everything you need to actually finish what you start.</h2>
            <p className="section-sub mt-16">Most online courses go unfinished. SmartLearn is built around structure, feedback and momentum so learning sticks.</p>
          </div>
          <div>
            {whyItems.map((w) => (
              <div className="why-item" key={w.title}>
                <div className="why-icon"><w.icon size={20} /></div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <div className="section-head">
          <div>
            <h2>What Our Students Say</h2>
            <p className="section-sub">Real outcomes from the SmartLearn community.</p>
          </div>
        </div>
        <div className="grid-3">
          {testimonials.map((t) => (
            <div className="card testimonial-card" key={t.name}>
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-avatar-row">
                <div className="avatar">{t.name.split(' ').map((n) => n[0]).join('')}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div className="text-faint" style={{ fontSize: 12.5 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
