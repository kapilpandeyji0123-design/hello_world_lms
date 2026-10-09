import DashboardLayout from '../../layouts/DashboardLayout';
import BarChart from '../../components/BarChart';
import ProgressBar from '../../components/ProgressBar';
import { adminNav } from '../../data/navConfig';

const coursePopularity = [
  { c: 'Java', v: 84 }, { c: 'Web Dev', v: 132 }, { c: 'Data Sci', v: 67 }, { c: 'AI/ML', v: 58 }, { c: 'Cloud', v: 49 }, { c: 'CyberSec', v: 41 },
];
const studentActivity = [
  { d: 'Mon', v: 3200 }, { d: 'Tue', v: 2900 }, { d: 'Wed', v: 3600 }, { d: 'Thu', v: 3100 }, { d: 'Fri', v: 3900 }, { d: 'Sat', v: 4600 }, { d: 'Sun', v: 2800 },
];

export default function AdminReports() {
  return (
    <DashboardLayout items={adminNav} roleLabel="Admin" userInitials="AD" notifPath="/admin/reports">
      <div className="page-title">Reports</div>
      <p className="page-sub">Platform-wide analytics and completion trends.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Course Popularity by Category</h3>
          <BarChart data={coursePopularity} xKey="c" yKey="v" />
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Student Activity (Weekly)</h3>
          <BarChart data={studentActivity} xKey="d" yKey="v" />
        </div>
      </div>

      <div className="card mt-24" style={{ padding: 24, maxWidth: 640 }}>
        <h3 style={{ fontSize: 16, marginBottom: 18 }}>Course Completion Rates</h3>
        <div className="flex-col gap-16">
          <ProgressBar value={72} label="Java Full Stack Development" />
          <ProgressBar value={65} label="Advanced React & Frontend Architecture" />
          <ProgressBar value={58} label="Machine Learning Foundations" />
          <ProgressBar value={80} label="Modern JavaScript from Zero to Expert" />
        </div>
      </div>
    </DashboardLayout>
  );
}
