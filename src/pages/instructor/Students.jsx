import { useState } from 'react';
import { Search } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { instructorNav } from '../../data/navConfig';
import { studentPerformance } from '../../data/mockData';

export default function InstructorStudents() {
  const [q, setQ] = useState('');
  const list = studentPerformance.filter((s) => s.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <DashboardLayout items={instructorNav} roleLabel="Instructor" userInitials="RM" notifPath={null}>
      <div className="page-title">Students</div>
      <p className="page-sub">Track progress and performance across your courses.</p>

      <div className="search-pill mt-24" style={{ maxWidth: 320 }}>
        <Search size={14} />
        <input placeholder="Search students..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      <div className="card mt-16">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Student</th><th>Course</th><th>Progress</th><th>Quiz Score</th><th>Assignment</th><th>Status</th></tr></thead>
            <tbody>
              {list.map((s) => (
                <tr key={s.email}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{s.name}</div>
                    <div className="text-faint" style={{ fontSize: 12 }}>{s.email}</div>
                  </td>
                  <td>{s.course}</td>
                  <td>{s.progress}%</td>
                  <td>{s.quiz}</td>
                  <td>{s.assignment}</td>
                  <td><span className={`badge ${s.status === 'On Track' ? 'badge-success' : 'badge-danger'}`}>{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
