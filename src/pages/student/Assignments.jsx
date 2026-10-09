import DashboardLayout from '../../layouts/DashboardLayout';
import { studentNav } from '../../data/navConfig';
import { assignments, submittedAssignments } from '../../data/mockData';

export default function Assignments() {
  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Assignments</div>
      <p className="page-sub">Track what's due and review your submitted work.</p>

      <h3 className="mt-32" style={{ fontSize: 16, marginBottom: 14 }}>Active Assignments</h3>
      <div className="flex-col gap-12">
        {assignments.map((a) => (
          <div className="card flex items-center justify-between" key={a.id} style={{ padding: 18, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14.5 }}>{a.title}</div>
              <div className="text-soft mt-8" style={{ fontSize: 13 }}>{a.course} · Due {a.due}</div>
            </div>
            <div className="flex items-center gap-16">
              <span className={`badge ${a.status === 'Submitted' ? 'badge-success' : 'badge-warning'}`}>{a.status}</span>
              <button className="btn btn-primary btn-sm" disabled={a.status === 'Submitted'}>
                {a.status === 'Submitted' ? 'Submitted' : 'Submit'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-32" style={{ fontSize: 16, marginBottom: 14 }}>Submitted Assignments</h3>
      <div className="flex-col gap-12">
        {submittedAssignments.map((a) => (
          <div className="card" key={a.id} style={{ padding: 18 }}>
            <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 14.5 }}>{a.title}</div>
              <span className="badge badge-brand">Score: {a.score}</span>
            </div>
            <div className="text-soft mt-8" style={{ fontSize: 13 }}>{a.course} · Submitted {a.submitted}</div>
            <div className="text-soft mt-8" style={{ fontSize: 13, fontStyle: 'italic' }}>“{a.feedback}”</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
