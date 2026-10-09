import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import ProgressBar from '../../components/ProgressBar';
import { studentNav } from '../../data/navConfig';
import { enrolledCourses } from '../../data/mockData';

const tabs = ['All', 'In Progress', 'Completed'];

export default function MyLearning() {
  const [tab, setTab] = useState('All');
  const list = enrolledCourses.filter((c) => {
    if (tab === 'In Progress') return c.progress < 100;
    if (tab === 'Completed') return c.progress >= 100;
    return true;
  });

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">My Learning</div>
      <p className="page-sub">All the courses you're currently enrolled in.</p>

      <div className="tab-row mt-24">
        {tabs.map((t) => (
          <button key={t} className={`tab-item ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} style={{ background: 'none', border: 'none', borderBottom: '2px solid transparent' }}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid-3">
        {list.map((c) => (
          <div className="card card-hover" key={c.id} style={{ overflow: 'hidden' }}>
            <div style={{ height: 120, background: c.gradient }} />
            <div style={{ padding: 18 }}>
              <h4 style={{ fontSize: 15, marginBottom: 12 }}>{c.title}</h4>
              <ProgressBar value={c.progress} label={`${c.progress}% complete`} showPercent={false} />
              <div className="text-faint mt-8" style={{ fontSize: 12.5 }}>Last watched: {c.lastLesson}</div>
              <Link to={`/student/course/${c.id}/learn`} className="btn btn-primary btn-sm btn-block mt-16">Continue Learning</Link>
            </div>
          </div>
        ))}
        {list.length === 0 && <p className="text-soft">No courses in this category yet.</p>}
      </div>
    </DashboardLayout>
  );
}
