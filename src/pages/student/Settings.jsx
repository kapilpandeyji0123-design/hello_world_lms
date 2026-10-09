import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { studentNav } from '../../data/navConfig';

function Toggle({ on, onClick }) {
  return <button className={`toggle ${on ? 'on' : ''}`} onClick={onClick} aria-label="Toggle" />;
}

export default function Settings() {
  const [notifs, setNotifs] = useState({ email: true, course: true, assignment: false });
  const [theme, setTheme] = useState('light');
  const [privacy, setPrivacy] = useState({ profile: true, activity: false });

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Settings</div>
      <p className="page-sub">Manage your account, notifications, appearance and privacy.</p>

      <div className="card mt-24" style={{ padding: 24, maxWidth: 640 }}>
        <h4 style={{ fontSize: 15, marginBottom: 6 }}>Account</h4>
        <div className="settings-row"><span className="text-soft">Profile Information</span><button className="btn btn-outline btn-sm">Edit Profile</button></div>
        <div className="settings-row"><span className="text-soft">Password</span><button className="btn btn-outline btn-sm">Change Password</button></div>
      </div>

      <div className="card mt-24" style={{ padding: 24, maxWidth: 640 }}>
        <h4 style={{ fontSize: 15, marginBottom: 6 }}>Notifications</h4>
        <div className="settings-row"><span className="text-soft">Email Notifications</span><Toggle on={notifs.email} onClick={() => setNotifs({ ...notifs, email: !notifs.email })} /></div>
        <div className="settings-row"><span className="text-soft">Course Notifications</span><Toggle on={notifs.course} onClick={() => setNotifs({ ...notifs, course: !notifs.course })} /></div>
        <div className="settings-row"><span className="text-soft">Assignment Notifications</span><Toggle on={notifs.assignment} onClick={() => setNotifs({ ...notifs, assignment: !notifs.assignment })} /></div>
      </div>

      <div className="card mt-24" style={{ padding: 24, maxWidth: 640 }}>
        <h4 style={{ fontSize: 15, marginBottom: 6 }}>Appearance</h4>
        <div className="settings-row">
          <span className="text-soft">Theme</span>
          <div className="flex gap-8">
            <button className={`filter-pill ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}>Light Mode</button>
            <button className={`filter-pill ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}>Dark Mode</button>
          </div>
        </div>
      </div>

      <div className="card mt-24" style={{ padding: 24, maxWidth: 640 }}>
        <h4 style={{ fontSize: 15, marginBottom: 6 }}>Privacy</h4>
        <div className="settings-row"><span className="text-soft">Profile Visibility</span><Toggle on={privacy.profile} onClick={() => setPrivacy({ ...privacy, profile: !privacy.profile })} /></div>
        <div className="settings-row"><span className="text-soft">Show Learning Activity</span><Toggle on={privacy.activity} onClick={() => setPrivacy({ ...privacy, activity: !privacy.activity })} /></div>
      </div>
    </DashboardLayout>
  );
}
