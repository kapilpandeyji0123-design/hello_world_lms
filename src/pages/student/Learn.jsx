import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, CheckCircle2, Circle, PlayCircle, ChevronLeft, ChevronRight, FileText, MessageSquare, Paperclip } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import ProgressBar from '../../components/ProgressBar';
import { studentNav } from '../../data/navConfig';
import { courseCurriculum, courses } from '../../data/mockData';

const flatLessons = courseCurriculum.flatMap((s) => s.lessons.map((l) => ({ section: s.title, lesson: l })));

export default function Learn() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[0];
  const [activeIdx, setActiveIdx] = useState(4); // "Classes" e.g.
  const [tab, setTab] = useState('Description');
  const active = flatLessons[activeIdx];

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="page-title" style={{ fontSize: 19 }}>{course.title}</div>
          <p className="page-sub">Lesson: {active.lesson}</p>
        </div>
        <div style={{ minWidth: 220 }}>
          <ProgressBar value={44} label="Course Progress" />
        </div>
      </div>

      <div className="learn-layout mt-24">
        <div>
          <div className="video-player">
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Play size={22} fill="#fff" />
            </div>
          </div>

          <div className="tab-row mt-24">
            {['Description', 'Resources', 'Notes', 'Discussion'].map((t) => (
              <button key={t} className={`tab-item ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} style={{ background: 'none', border: 'none' }}>
                {t}
              </button>
            ))}
          </div>

          {tab === 'Description' && (
            <p className="text-soft" style={{ fontSize: 14, lineHeight: 1.7 }}>
              This lesson covers {active.lesson.toLowerCase()} as part of the {active.section} module. Follow along with the video and complete the linked exercises to reinforce what you've learned.
            </p>
          )}
          {tab === 'Resources' && (
            <div className="flex-col gap-12">
              <div className="flex items-center gap-12 text-soft" style={{ fontSize: 14 }}><Paperclip size={15} /> Lesson slides.pdf</div>
              <div className="flex items-center gap-12 text-soft" style={{ fontSize: 14 }}><Paperclip size={15} /> Starter code.zip</div>
            </div>
          )}
          {tab === 'Notes' && (
            <textarea className="field" style={{ width: '100%', minHeight: 120, padding: 14, borderRadius: 10, border: '1.5px solid var(--line-strong)' }} placeholder="Write a note for this lesson..." />
          )}
          {tab === 'Discussion' && (
            <div className="text-soft" style={{ fontSize: 14 }}>
              <div className="flex items-center gap-12"><MessageSquare size={15} /> 12 questions asked in this lesson. Be the first to reply!</div>
            </div>
          )}

          <div className="flex items-center justify-between mt-32">
            <button className="btn btn-outline" disabled={activeIdx === 0} onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}>
              <ChevronLeft size={16} /> Previous Lesson
            </button>
            <button className="btn btn-accent"><CheckCircle2 size={16} /> Mark as Complete</button>
            <button className="btn btn-outline" disabled={activeIdx === flatLessons.length - 1} onClick={() => setActiveIdx((i) => Math.min(flatLessons.length - 1, i + 1))}>
              Next Lesson <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="card" style={{ padding: 18, alignSelf: 'flex-start' }}>
          <h4 style={{ fontSize: 14, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--ink-soft)' }}>Course Curriculum</h4>
          {flatLessons.map((l, i) => (
            <div
              key={i}
              className={`curriculum-item ${i === activeIdx ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveIdx(i)}
            >
              <span className="lesson-status">
                {i < activeIdx ? <CheckCircle2 size={18} color="var(--success)" /> : i === activeIdx ? <PlayCircle size={18} color="var(--brand)" /> : <Circle size={16} color="var(--ink-faint)" />}
              </span>
              <span>{l.lesson}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
