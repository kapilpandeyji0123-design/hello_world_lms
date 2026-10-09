import { useState } from 'react';
import { Award, Download, Eye, X } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { studentNav } from '../../data/navConfig';
import { certificates } from '../../data/mockData';

export default function Certificates() {
  const [preview, setPreview] = useState(null);

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Certificates</div>
      <p className="page-sub">Certificates you've earned by completing courses.</p>

      <div className="grid-3 mt-24">
        {certificates.map((c) => (
          <div className="card" key={c.id} style={{ padding: 22 }}>
            <div className="why-icon" style={{ background: 'var(--warning-tint)', color: 'var(--warning)' }}><Award size={20} /></div>
            <h4 style={{ fontSize: 15, marginTop: 14 }}>{c.course}</h4>
            <p className="text-faint mt-8" style={{ fontSize: 12.5 }}>Completed {c.date}</p>
            <p className="text-faint" style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>{c.id}</p>
            <div className="flex gap-8 mt-16">
              <button className="btn btn-outline btn-sm" style={{ flex: 1 }} onClick={() => setPreview(c)}><Eye size={14} /> View</button>
              <button className="btn btn-primary btn-sm" style={{ flex: 1 }}><Download size={14} /> Download</button>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(13,14,20,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 20 }} onClick={() => setPreview(null)}>
          <div style={{ maxWidth: 560, width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mt-8" style={{ marginBottom: 12 }}>
              <span style={{ color: '#fff', fontWeight: 600 }}>Certificate Preview</span>
              <button className="icon-btn" onClick={() => setPreview(null)}><X size={16} /></button>
            </div>
            <div className="certificate-preview">
              <span className="eyebrow">CERTIFICATE OF COMPLETION</span>
              <h2>SmartLearn</h2>
              <p className="text-soft">This certifies that</p>
              <div className="name">Jordan Doe</div>
              <p className="text-soft">has successfully completed</p>
              <h3 style={{ fontSize: 18, margin: '10px 0' }}>{preview.course}</h3>
              <p className="text-faint" style={{ fontSize: 12, marginTop: 16 }}>Issued {preview.date} · {preview.id}</p>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
