import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { studentNav } from '../../data/navConfig';
import { notifications as initial } from '../../data/mockData';

export default function Notifications() {
  const [items, setItems] = useState(initial);

  const markAllRead = () => setItems(items.map((n) => ({ ...n, unread: false })));
  const markRead = (id) => setItems(items.map((n) => (n.id === id ? { ...n, unread: false } : n)));
  const remove = (id) => setItems(items.filter((n) => n.id !== id));

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="page-title">Notifications</div>
          <p className="page-sub">Stay up to date with your courses and activity.</p>
        </div>
        <button className="btn btn-outline btn-sm" onClick={markAllRead}>Mark all as read</button>
      </div>

      <div className="mt-24" style={{ maxWidth: 640 }}>
        {items.map((n) => (
          <div key={n.id} className={`notif-item ${n.unread ? 'unread' : ''}`}>
            <span className="notif-emoji">{n.emoji}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14 }}>{n.text}</p>
              <span className="text-faint" style={{ fontSize: 12 }}>{n.time}</span>
            </div>
            <div className="flex items-center gap-8">
              {n.unread && <button className="btn btn-ghost btn-sm" onClick={() => markRead(n.id)}>Mark read</button>}
              <button className="icon-btn" onClick={() => remove(n.id)} aria-label="Delete"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-soft">You're all caught up.</p>}
      </div>
    </DashboardLayout>
  );
}
