import { BookOpen, Users, DollarSign, Star } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import StatCard from '../../components/StatCard';
import BarChart from '../../components/BarChart';
import { instructorNav } from '../../data/navConfig';
import { weeklyHours, instructorCourses } from '../../data/mockData';

const enrollmentTrend = [
  { m: 'Mar', v: 1200 }, { m: 'Apr', v: 1800 }, { m: 'May', v: 1500 }, { m: 'Jun', v: 2400 }, { m: 'Jul', v: 2100 }, { m: 'Aug', v: 2900 },
];

const recentStudents = [
  { name: 'Ishaan Gupta', activity: 'Completed "OOP Concepts" module', time: '2h ago' },
  { name: 'Farhan Ali', activity: 'Submitted assignment "REST API Basics"', time: '5h ago' },
  { name: 'Divya Nair', activity: 'Enrolled in Java Full Stack Development', time: '1d ago' },
];

export default function InstructorDashboard() {
  return (
    <DashboardLayout items={instructorNav} roleLabel="Instructor" userInitials="RM" notifPath={null}>
      <div className="page-title">Welcome back, Rohan 👋</div>
      <p className="page-sub">Here's how your courses are performing.</p>

      <div className="grid-4 mt-24">
        <StatCard icon={BookOpen} label="Total Courses" value="3" />
        <StatCard icon={Users} label="Total Students" value="22.6K" color="var(--success)" bg="var(--success-tint)" />
        <StatCard icon={DollarSign} label="Total Revenue" value="₹23.6L" color="var(--accent)" bg="var(--accent-tint)" />
        <StatCard icon={Star} label="Average Rating" value="4.8" color="var(--warning)" bg="var(--warning-tint)" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24, marginTop: 32 }}>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Enrollment Trend</h3>
          <BarChart data={enrollmentTrend} xKey="m" yKey="v" />
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 16 }}>Recent Students</h3>
          <div className="flex-col gap-16">
            {recentStudents.map((s) => (
              <div className="flex items-center gap-12" key={s.name}>
                <div className="avatar" style={{ width: 34, height: 34, fontSize: 12 }}>{s.name.split(' ').map(n=>n[0]).join('')}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{s.name}</div>
                  <div className="text-faint" style={{ fontSize: 12 }}>{s.activity}</div>
                </div>
                <span className="text-faint" style={{ fontSize: 11 }}>{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-head mt-32"><h2 style={{ fontSize: 20 }}>My Courses</h2></div>
      <div className="card">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Course</th><th>Students</th><th>Rating</th><th>Revenue</th><th>Status</th></tr></thead>
            <tbody>
              {instructorCourses.map((c) => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.students.toLocaleString()}</td>
                  <td>{c.rating || '—'}</td>
                  <td>{c.revenue}</td>
                  <td><span className={`badge ${c.status === 'Published' ? 'badge-success' : 'badge-warning'}`}>{c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
