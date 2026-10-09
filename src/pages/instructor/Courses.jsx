import { Link } from 'react-router-dom';
import { Eye, Pencil, Plus } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { instructorNav } from '../../data/navConfig';
import { instructorCourses } from '../../data/mockData';

export default function InstructorCourses() {
  return (
    <DashboardLayout items={instructorNav} roleLabel="Instructor" userInitials="RM" notifPath={null}>
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="page-title">My Courses</div>
          <p className="page-sub">Manage and track all the courses you've published.</p>
        </div>
        <Link to="/instructor/create-course" className="btn btn-primary"><Plus size={16} /> Create Course</Link>
      </div>

      <div className="card mt-24">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Course</th><th>Students</th><th>Rating</th><th>Revenue</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {instructorCourses.map((c) => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.students.toLocaleString()}</td>
                  <td>{c.rating || '—'}</td>
                  <td>{c.revenue}</td>
                  <td><span className={`badge ${c.status === 'Published' ? 'badge-success' : 'badge-warning'}`}>{c.status}</span></td>
                  <td>
                    <div className="flex gap-8">
                      <button className="icon-btn" aria-label="View"><Eye size={14} /></button>
                      <button className="icon-btn" aria-label="Edit"><Pencil size={14} /></button>
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
