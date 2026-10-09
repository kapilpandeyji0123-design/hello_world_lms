import DashboardLayout from '../../layouts/DashboardLayout';
import { adminNav } from '../../data/navConfig';
import { adminStudents } from '../../data/mockData';

export default function AdminStudents() {
  return (
    <DashboardLayout items={adminNav} roleLabel="Admin" userInitials="AD" notifPath="/admin/reports">
      <div className="page-title">Students</div>
      <p className="page-sub">Manage all registered students on SmartLearn.</p>

      <div className="card mt-24">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Name</th><th>Email</th><th>Courses</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead>
            <tbody>
              {adminStudents.map((s) => (
                <tr key={s.email}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.courses}</td>
                  <td><span className={`badge ${s.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>{s.status}</span></td>
                  <td>{s.joined}</td>
                  <td><button className="btn btn-outline btn-sm">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
