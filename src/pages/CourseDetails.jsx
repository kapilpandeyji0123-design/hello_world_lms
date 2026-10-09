import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, CheckCircle2, ChevronDown, Users, Clock, BarChart3, Heart, FileVideo, ClipboardList, HelpCircle, Award } from 'lucide-react';
import PublicLayout from '../layouts/PublicLayout';
import Rating from '../components/Rating';
import { courses, courseCurriculum } from '../data/mockData';

const learnPoints = [
  'Learn Java fundamentals and core syntax',
  'Master object-oriented programming principles',
  'Build production-grade REST APIs',
  'Work confidently with Spring Boot',
  'Connect applications with MySQL databases',
  'Deploy full-stack applications end to end',
];

const reviews = [
  { name: 'Karthik R.', rating: 5, text: 'One of the most practical Java courses I\u2019ve taken \u2014 the Spring Boot section alone was worth it.' },
  { name: 'Simran K.', rating: 4.5, text: 'Great pacing and real projects. Would\u2019ve liked a bit more on testing.' },
  { name: 'Owen D.', rating: 5, text: 'Instructor explains concepts clearly and the assignments actually match interview questions.' },
];

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[0];
  const [openSection, setOpenSection] = useState(0);
  const [wished, setWished] = useState(false);

  return (
    <PublicLayout>
      <div style={{ background: 'var(--ink-950)', color: '#fff', padding: '40px 0 56px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40 }}>
          <div>
            <span className="eyebrow" style={{ color: '#B9B3F5' }}>{course.category} · {course.level}</span>
            <h1 style={{ fontSize: 32, marginTop: 12 }}>{course.title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 14, lineHeight: 1.6 }}>{course.description}</p>
            <div className="flex items-center gap-20 mt-24" style={{ flexWrap: 'wrap', color: 'rgba(255,255,255,0.85)', fontSize: 13.5 }}>
              <Rating value={course.rating} count={course.reviews} />
              <span className="flex items-center gap-8"><Users size={14} /> {course.students.toLocaleString()} students</span>
              <span className="flex items-center gap-8"><Clock size={14} /> {course.duration}</span>
              <span>Instructor: <strong>{course.instructor}</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: -32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40 }}>
          <div>
            {/* Preview */}
            <div className="video-player">
              <div className="flex-col items-center gap-8" style={{ alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={22} fill="#fff" />
                </div>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>Course Preview</span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="card mt-32" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 19, marginBottom: 16 }}>What you'll learn</h3>
              <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {learnPoints.map((p) => (
                  <div className="flex gap-12" key={p} style={{ fontSize: 14, alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} color="var(--success)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span className="text-soft">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="card mt-32" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 19, marginBottom: 16 }}>Course Content</h3>
              {courseCurriculum.map((sec, i) => (
                <div key={sec.title} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}>
                  <button
                    onClick={() => setOpenSection(openSection === i ? -1 : i)}
                    className="flex items-center justify-between w-full"
                    style={{ background: 'none', border: 'none', padding: '16px 4px', textAlign: 'left' }}
                  >
                    <span style={{ fontWeight: 600, fontSize: 14.5 }}>Section {i + 1} — {sec.title}</span>
                    <ChevronDown size={17} style={{ transform: openSection === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }} />
                  </button>
                  {openSection === i && (
                    <div style={{ paddingBottom: 14 }}>
                      {sec.lessons.map((l) => (
                        <div key={l} className="flex items-center gap-12 text-soft" style={{ fontSize: 13.5, padding: '8px 4px' }}>
                          <FileVideo size={14} /> {l}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Instructor */}
            <div className="card mt-32" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 19, marginBottom: 18 }}>Instructor</h3>
              <div className="flex gap-16 items-center">
                <div className="avatar" style={{ width: 60, height: 60, fontSize: 20 }}>
                  {course.instructor.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>{course.instructor}</div>
                  <div className="text-faint" style={{ fontSize: 13 }}>Senior Software Engineer · 9 yrs experience</div>
                  <div className="flex gap-16 mt-8 text-soft" style={{ fontSize: 13 }}>
                    <span>4 Courses</span><span>68,200 Students</span><span>4.8 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="card mt-32" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 19, marginBottom: 16 }}>Student Reviews</h3>
              {reviews.map((r) => (
                <div key={r.name} style={{ padding: '16px 0', borderTop: '1px solid var(--line)' }}>
                  <div className="flex items-center justify-between">
                    <strong style={{ fontSize: 14 }}>{r.name}</strong>
                    <Rating value={r.rating} />
                  </div>
                  <p className="text-soft mt-8" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enrollment card */}
          <div>
            <div className="card" style={{ padding: 24, position: 'sticky', top: 96 }}>
              <div className="course-thumb" style={{ background: course.gradient, height: 130, borderRadius: 12, marginBottom: 18 }} />
              <div className="flex items-center gap-12">
                <span className="price" style={{ fontSize: 26 }}>₹{course.price}</span>
                <span className="price-old">₹{course.oldPrice}</span>
              </div>
              <button className="btn btn-primary btn-block mt-16">Enroll Now</button>
              <button className={`btn btn-outline btn-block mt-8`} onClick={() => setWished(!wished)}>
                <Heart size={15} fill={wished ? 'var(--danger)' : 'none'} color={wished ? 'var(--danger)' : 'currentColor'} />
                {wished ? 'Wishlisted' : 'Add to Wishlist'}
              </button>
              <div className="mt-24">
                <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 12 }}>This course includes:</div>
                <div className="flex-col gap-12">
                  <div className="flex items-center gap-12 text-soft" style={{ fontSize: 13.5 }}><FileVideo size={15} /> 84 video lessons</div>
                  <div className="flex items-center gap-12 text-soft" style={{ fontSize: 13.5 }}><ClipboardList size={15} /> 12 assignments</div>
                  <div className="flex items-center gap-12 text-soft" style={{ fontSize: 13.5 }}><HelpCircle size={15} /> 6 quizzes</div>
                  <div className="flex items-center gap-12 text-soft" style={{ fontSize: 13.5 }}><Award size={15} /> Certificate of completion</div>
                  <div className="flex items-center gap-12 text-soft" style={{ fontSize: 13.5 }}><BarChart3 size={15} /> Full lifetime access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 64 }} />
    </PublicLayout>
  );
}
