import DashboardLayout from '../../layouts/DashboardLayout';
import BarChart from '../../components/BarChart';
import ProgressBar from '../../components/ProgressBar';
import { instructorNav } from '../../data/navConfig';

const enrollment = [
  { m: 'Mar', v: 1200 }, { m: 'Apr', v: 1800 }, { m: 'May', v: 1500 }, { m: 'Jun', v: 2400 }, { m: 'Jul', v: 2100 }, { m: 'Aug', v: 2900 },
];
const revenue = [
  { m: 'Mar', v: 280000 }, { m: 'Apr', v: 340000 }, { m: 'May', v: 310000 }, { m: 'Jun', v: 420000 }, { m: 'Jul', v: 390000 }, { m: 'Aug', v: 520000 },
];

export default function InstructorAnalytics() {
  return (
    <DashboardLayout items={instructorNav} roleLabel="Instructor" userInitials="RM" notifPath={null}>
      <div className="page-title">Analytics</div>
      <p className="page-sub">Enrollment, completion, performance and revenue across your courses.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Enrollment Graph</h3>
          <BarChart data={enrollment} xKey="m" yKey="v" />
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Revenue (₹)</h3>
          <BarChart data={revenue} xKey="m" yKey="v" />
        </div>
      </div>

      <div className="card mt-24" style={{ padding: 24, maxWidth: 640 }}>
        <h3 style={{ fontSize: 16, marginBottom: 18 }}>Course Completion & Performance</h3>
        <div className="flex-col gap-16">
          <ProgressBar value={78} label="Java Full Stack Development — Completion" />
          <ProgressBar value={64} label="Advanced Spring Security — Completion" />
          <ProgressBar value={85} label="Average Quiz Performance" />
        </div>
      </div>
    </DashboardLayout>
  );
}
