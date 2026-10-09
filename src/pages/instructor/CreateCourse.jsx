import { useState } from 'react';
import { Check, Plus, Upload, FileVideo, FileText, HelpCircle } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { instructorNav } from '../../data/navConfig';

const steps = ['Basic Information', 'Curriculum', 'Requirements', 'Preview'];

export default function CreateCourse() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ title: '', description: '', category: 'Java', level: 'Beginner', language: 'English', price: '' });

  return (
    <DashboardLayout items={instructorNav} roleLabel="Instructor" userInitials="RM" notifPath={null}>
      <div className="page-title">Create Course</div>
      <p className="page-sub">Publish a new course to the SmartLearn catalog.</p>

      <div className="flex items-center gap-16 mt-24" style={{ flexWrap: 'wrap' }}>
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-8">
            <div style={{
              width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: i <= step ? 'var(--brand)' : 'var(--line)', color: i <= step ? '#fff' : 'var(--ink-faint)', fontSize: 12, fontWeight: 700,
            }}>
              {i < step ? <Check size={13} /> : i + 1}
            </div>
            <span style={{ fontSize: 13.5, fontWeight: i === step ? 700 : 500, color: i === step ? 'var(--ink)' : 'var(--ink-faint)' }}>{s}</span>
            {i < steps.length - 1 && <div style={{ width: 30, height: 1.5, background: 'var(--line-strong)' }} />}
          </div>
        ))}
      </div>

      <div className="card mt-24" style={{ padding: 28, maxWidth: 720 }}>
        {step === 0 && (
          <div>
            <div className="field"><label>Course Title</label><input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Java Full Stack Development" /></div>
            <div className="field"><label>Description</label><textarea rows={4} placeholder="Describe what students will learn..." /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="field"><label>Category</label>
                <select><option>Java</option><option>Web Development</option><option>Data Science</option><option>AI & Machine Learning</option><option>Cloud Computing</option><option>Cyber Security</option></select>
              </div>
              <div className="field"><label>Level</label>
                <select><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
              </div>
              <div className="field"><label>Language</label><input defaultValue="English" /></div>
              <div className="field"><label>Price (₹)</label><input type="number" placeholder="1999" /></div>
            </div>
            <div className="field">
              <label>Thumbnail</label>
              <div className="card" style={{ padding: 24, textAlign: 'center', border: '1.5px dashed var(--line-strong)' }}>
                <Upload size={20} style={{ margin: '0 auto 8px' }} />
                <span className="text-soft" style={{ fontSize: 13 }}>Click to upload a thumbnail image</span>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h4 style={{ fontSize: 15, marginBottom: 16 }}>Course Curriculum</h4>
            <div className="card" style={{ padding: 16, marginBottom: 12 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Section 1 — Introduction</div>
              <div className="flex items-center gap-12 text-soft" style={{ fontSize: 13, padding: '6px 0' }}><FileVideo size={14} /> Welcome</div>
              <div className="flex items-center gap-12 text-soft" style={{ fontSize: 13, padding: '6px 0' }}><FileVideo size={14} /> Course Overview</div>
            </div>
            <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
              <button className="btn btn-outline btn-sm"><Plus size={14} /> Add Section</button>
              <button className="btn btn-outline btn-sm"><Plus size={14} /> Add Lesson</button>
              <button className="btn btn-outline btn-sm"><FileVideo size={14} /> Upload Video</button>
              <button className="btn btn-outline btn-sm"><FileText size={14} /> Upload PDF</button>
              <button className="btn btn-outline btn-sm"><HelpCircle size={14} /> Add Quiz</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="field"><label>Requirements</label><textarea rows={3} placeholder="Basic understanding of programming concepts" /></div>
            <div className="field"><label>Learning Objectives</label><textarea rows={3} placeholder="Build and deploy REST APIs with Spring Boot" /></div>
            <div className="field"><label>Target Audience</label><textarea rows={3} placeholder="Beginner to intermediate developers wanting backend skills" /></div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="course-thumb" style={{ background: 'linear-gradient(135deg,#3F35C5,#7C3AED)', height: 140, borderRadius: 12, marginBottom: 16 }} />
            <h3 style={{ fontSize: 20 }}>{form.title || 'Your Course Title'}</h3>
            <p className="text-soft mt-8">{form.description || 'Your course description will appear here.'}</p>
            <div className="flex gap-16 mt-16 text-soft" style={{ fontSize: 13 }}>
              <span>{form.category}</span><span>{form.level}</span><span>₹{form.price || '—'}</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-32">
          <button className="btn btn-outline" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>Back</button>
          <div className="flex gap-12">
            <button className="btn btn-outline">Save Draft</button>
            {step < steps.length - 1 ? (
              <button className="btn btn-primary" onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>Next</button>
            ) : (
              <button className="btn btn-accent">Publish Course</button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
