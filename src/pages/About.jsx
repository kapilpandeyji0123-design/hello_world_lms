import { Target, Users, Award, TrendingUp } from 'lucide-react';
import PublicLayout from '../layouts/PublicLayout';

const features = [
  { icon: Target, title: 'Outcome-Focused Curriculum', text: 'Every path is built around real job skills, not just video hours.' },
  { icon: Users, title: 'Practitioner Instructors', text: 'Courses are taught by engineers, analysts and architects working in the field today.' },
  { icon: Award, title: 'Verified Certificates', text: 'Certificates map to the skills you actually demonstrated in projects and quizzes.' },
  { icon: TrendingUp, title: 'Adaptive Progress Tracking', text: 'Dashboards and AI recommendations keep your next step always in view.' },
];

export default function About() {
  return (
    <PublicLayout>
      <section className="hero" style={{ padding: '64px 0' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: '#B9B3F5' }}>ABOUT SMARTLEARN</span>
          <h1 style={{ fontSize: 40, marginTop: 14, maxWidth: 640 }}>Built to help people finish what they start learning.</h1>
          <p className="lede mt-16">
            SmartLearn is an online learning platform combining expert-led courses, structured curricula and AI-powered guidance to help learners actually reach mastery, not just watch videos.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="stats-strip">
          <div className="stat-block"><div className="num">10,000+</div><div className="label">Students</div></div>
          <div className="stat-block"><div className="num">500+</div><div className="label">Courses</div></div>
          <div className="stat-block"><div className="num">150+</div><div className="label">Instructors</div></div>
          <div className="stat-block"><div className="num">95%</div><div className="label">Completion Rate</div></div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <h2>Why Choose SmartLearn</h2>
            <p className="section-sub">The pillars behind every course we publish.</p>
          </div>
        </div>
        <div className="grid-4">
          {features.map((f) => (
            <div className="card" key={f.title} style={{ padding: 22 }}>
              <div className="why-icon" style={{ marginBottom: 14 }}><f.icon size={20} /></div>
              <h4 style={{ fontSize: 15.5, marginBottom: 6 }}>{f.title}</h4>
              <p className="text-soft" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink-950)', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: '#B9B3F5' }}>OUR MISSION</span>
          <h2 style={{ fontSize: 30, marginTop: 12, maxWidth: 640, marginInline: 'auto' }}>
            Make high-quality, career-relevant education accessible to every learner, everywhere.
          </h2>
        </div>
      </section>
    </PublicLayout>
  );
}
