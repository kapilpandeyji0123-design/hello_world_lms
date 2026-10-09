import DashboardLayout from '../../layouts/DashboardLayout';
import { adminNav } from '../../data/navConfig';
import { adminInstructors } from '../../data/mockData';

export default function AdminInstructors() {
  return (
    <DashboardLayout items={adminNav} roleLabel="Admin" userInitials="AD" notifPath="/admin/reports">
      <div className="page-title">Instructors</div>
      <p className="page-sub">Manage instructor accounts and approvals.</p>

      <div className="card mt-24">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Name</th><th>Email</th><th>Courses</th><th>Students</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {adminInstructors.map((s) => (
                <tr key={s.email}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.courses}</td>
                  <td>{s.students.toLocaleString()}</td>
                  <td>{s.rating}</td>
                  <td><span className={`badge ${s.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>{s.status}</span></td>
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
