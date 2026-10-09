import { Eye, Pencil, Check, X, Trash2 } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { adminNav } from '../../data/navConfig';
import { adminCourses } from '../../data/mockData';

const statusBadge = { Approved: 'badge-success', 'Pending Review': 'badge-warning', Rejected: 'badge-danger' };

export default function AdminCourses() {
  return (
    <DashboardLayout items={adminNav} roleLabel="Admin" userInitials="AD" notifPath="/admin/reports">
      <div className="page-title">Course Management</div>
      <p className="page-sub">Review, approve and manage all courses on the platform.</p>

      <div className="card mt-24">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Course</th><th>Instructor</th><th>Category</th><th>Students</th><th>Rating</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead>
            <tbody>
              {adminCourses.map((c) => (
                <tr key={c.title}>
                  <td>{c.title}</td>
                  <td>{c.instructor}</td>
                  <td>{c.category}</td>
                  <td>{c.students.toLocaleString()}</td>
                  <td>{c.rating || '—'}</td>
                  <td><span className={`badge ${statusBadge[c.status]}`}>{c.status}</span></td>
                  <td>{c.created}</td>
                  <td>
                    <div className="flex gap-8">
                      <button className="icon-btn" aria-label="View"><Eye size={13} /></button>
                      <button className="icon-btn" aria-label="Edit"><Pencil size={13} /></button>
                      <button className="icon-btn" aria-label="Approve"><Check size={13} /></button>
                      <button className="icon-btn" aria-label="Reject"><X size={13} /></button>
                      <button className="icon-btn" aria-label="Delete"><Trash2 size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
