import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Rating from '../../components/Rating';
import { studentNav } from '../../data/navConfig';
import { courses } from '../../data/mockData';

export default function Wishlist() {
  const [ids, setIds] = useState(courses.slice(2, 6).map((c) => c.id));
  const list = courses.filter((c) => ids.includes(c.id));

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Wishlist</div>
      <p className="page-sub">Courses you've saved for later.</p>

      <div className="grid-3 mt-24">
        {list.map((c) => (
          <div className="card" key={c.id} style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ height: 130, background: c.gradient, position: 'relative' }}>
              <button className="wishlist-btn active" style={{ top: 10, right: 10 }} onClick={() => setIds(ids.filter((i) => i !== c.id))} aria-label="Remove">
                <X size={15} />
              </button>
            </div>
            <div style={{ padding: 16 }}>
              <Link to={`/courses/${c.id}`}><h4 style={{ fontSize: 14.5, marginBottom: 6 }}>{c.title}</h4></Link>
              <span className="course-instructor">by {c.instructor}</span>
              <div className="mt-8"><Rating value={c.rating} count={c.reviews} /></div>
              <div className="flex items-center justify-between mt-16">
                <span className="price">₹{c.price}</span>
                <Link to={`/courses/${c.id}`} className="btn btn-primary btn-sm">Enroll</Link>
              </div>
            </div>
          </div>
        ))}
        {list.length === 0 && <p className="text-soft">Your wishlist is empty. Explore courses to save some for later.</p>}
      </div>
    </DashboardLayout>
  );
}
