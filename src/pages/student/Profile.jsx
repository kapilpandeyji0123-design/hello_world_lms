import { Camera } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { studentNav } from '../../data/navConfig';

export default function Profile() {
  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Profile</div>
      <p className="page-sub">Manage your personal information.</p>

      <div className="card mt-24" style={{ padding: 28, maxWidth: 640 }}>
        <div className="flex items-center gap-20">
          <div className="avatar" style={{ width: 72, height: 72, fontSize: 24, position: 'relative' }}>
            JD
            <div style={{ position: 'absolute', bottom: -2, right: -2, width: 26, height: 26, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Camera size={13} />
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Jordan Doe</div>
            <div className="text-faint" style={{ fontSize: 13 }}>Student since Jan 2026</div>
            <button className="btn btn-outline btn-sm mt-8">Upload Profile Picture</button>
          </div>
        </div>

        <div className="mt-32" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="field"><label>Full Name</label><input defaultValue="Jordan Doe" /></div>
          <div className="field"><label>Email</label><input defaultValue="jordan.doe@mail.com" /></div>
          <div className="field"><label>Phone</label><input defaultValue="+91 98765 43210" /></div>
          <div className="field"><label>Location</label><input defaultValue="Bengaluru, India" /></div>
        </div>
        <div className="field">
          <label>Bio</label>
          <textarea rows={3} defaultValue="Final-year CSE student passionate about backend development and cloud systems." />
        </div>

        <div className="flex gap-12 mt-16">
          <button className="btn btn-primary">Edit Profile</button>
          <button className="btn btn-outline">Change Password</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
