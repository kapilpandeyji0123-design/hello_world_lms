import { Users, GraduationCap, Layers, ClipboardCheck } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import StatCard from '../../components/StatCard';
import BarChart from '../../components/BarChart';
import { adminNav } from '../../data/navConfig';

const monthlyEnrollments = [
  { m: 'Mar', v: 3200 }, { m: 'Apr', v: 4100 }, { m: 'May', v: 3800 }, { m: 'Jun', v: 5200 }, { m: 'Jul', v: 4900 }, { m: 'Aug', v: 6100 },
];

const activity = [
  { emoji: '🧑‍🎓', text: 'New registration: Divya Nair', time: '10m ago' },
  { emoji: '📘', text: 'New course submitted: "Intro to Kubernetes"', time: '1h ago' },
  { emoji: '✅', text: 'Course approved: "Advanced Spring Security"', time: '3h ago' },
  { emoji: '🏅', text: 'Certificate generated for Ishaan Gupta', time: '6h ago' },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout items={adminNav} roleLabel="Admin" userInitials="AD" notifPath="/admin/reports">
      <div className="page-title">Admin Overview</div>
      <p className="page-sub">Platform-wide statistics and activity.</p>

      <div className="grid-4 mt-24">
        <StatCard icon={Users} label="Total Students" value="10,482" />
        <StatCard icon={GraduationCap} label="Total Instructors" value="158" color="var(--success)" bg="var(--success-tint)" />
        <StatCard icon={Layers} label="Total Courses" value="512" color="var(--accent)" bg="var(--accent-tint)" />
        <StatCard icon={ClipboardCheck} label="Total Enrollments" value="48,930" color="var(--warning)" bg="var(--warning-tint)" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24, marginTop: 32 }}>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Monthly Enrollments</h3>
          <BarChart data={monthlyEnrollments} xKey="m" yKey="v" />
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 16 }}>Recent Activity</h3>
          <div className="flex-col gap-16">
            {activity.map((a, i) => (
              <div className="flex items-center gap-12" key={i}>
                <span style={{ fontSize: 18 }}>{a.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5 }}>{a.text}</div>
                </div>
                <span className="text-faint" style={{ fontSize: 11 }}>{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
