import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import ProgressBar from '../../components/ProgressBar';
import { studentNav } from '../../data/navConfig';
import { quizQuestions } from '../../data/mockData';

export default function QuizPage() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [seconds, setSeconds] = useState(600);
  const [reviewing, setReviewing] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const q = quizQuestions[idx];
  const select = (optIdx) => {
    const next = [...answers];
    next[idx] = optIdx;
    setAnswers(next);
  };

  const correctCount = answers.filter((a, i) => a === quizQuestions[i].answer).length;
  const percent = Math.round((correctCount / quizQuestions.length) * 100);
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  if (submitted && !reviewing) {
    return (
      <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
        <div className="card" style={{ padding: 40, maxWidth: 520, margin: '40px auto', textAlign: 'center' }}>
          <div className="why-icon" style={{ margin: '0 auto 16px', background: percent >= 60 ? 'var(--success-tint)' : 'var(--danger-tint)', color: percent >= 60 ? 'var(--success)' : 'var(--danger)' }}>
            <Trophy size={22} />
          </div>
          <h2 style={{ fontSize: 24 }}>{percent >= 60 ? 'Quiz Passed!' : 'Quiz Not Passed'}</h2>
          <div className="stat-value mt-16" style={{ fontSize: 40 }}>{percent}%</div>
          <div className="flex items-center justify-between mt-24" style={{ textAlign: 'left' }}>
            <span className="text-soft">Correct Answers</span>
            <strong>{correctCount}/{quizQuestions.length}</strong>
          </div>
          <div className="flex items-center justify-between mt-8" style={{ textAlign: 'left' }}>
            <span className="text-soft">Wrong Answers</span>
            <strong>{quizQuestions.length - correctCount}/{quizQuestions.length}</strong>
          </div>
          <div className="flex items-center justify-between mt-8" style={{ textAlign: 'left' }}>
            <span className="text-soft">Result</span>
            <span className={`badge ${percent >= 60 ? 'badge-success' : 'badge-danger'}`}>{percent >= 60 ? 'Pass' : 'Fail'}</span>
          </div>
          <div className="flex gap-12 mt-32">
            <button className="btn btn-outline btn-block" onClick={() => setReviewing(true)}>Review Answers</button>
            <Link to="/student/my-learning" className="btn btn-primary btn-block">Continue Course</Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="page-title" style={{ fontSize: 19 }}>Spring Boot Basics Quiz</div>
          <p className="page-sub">Question {idx + 1} of {quizQuestions.length}</p>
        </div>
        {!reviewing && (
          <span className="badge badge-brand flex items-center gap-8" style={{ fontFamily: 'var(--font-mono)' }}>
            <Clock size={13} /> {mm}:{ss}
          </span>
        )}
      </div>

      <div style={{ maxWidth: 640, marginTop: 20 }}>
        <ProgressBar value={((idx + 1) / quizQuestions.length) * 100} showPercent={false} />

        <div className="card mt-24" style={{ padding: 26 }}>
          <h3 style={{ fontSize: 17, marginBottom: 20 }}>{q.q}</h3>
          {q.options.map((opt, i) => {
            let cls = 'quiz-option';
            if (reviewing) {
              if (i === q.answer) cls += ' correct';
              else if (i === answers[idx]) cls += ' wrong';
            } else if (answers[idx] === i) cls += ' selected';
            return (
              <div key={i} className={cls} style={{ cursor: reviewing ? 'default' : 'pointer' }} onClick={() => !reviewing && select(i)}>
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
                {reviewing && i === q.answer && <CheckCircle2 size={16} color="var(--success)" style={{ marginLeft: 'auto' }} />}
                {reviewing && i === answers[idx] && i !== q.answer && <XCircle size={16} color="var(--danger)" style={{ marginLeft: 'auto' }} />}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-24">
          <button className="btn btn-outline" disabled={idx === 0} onClick={() => setIdx((i) => Math.max(0, i - 1))}>Previous</button>
          {idx < quizQuestions.length - 1 ? (
            <button className="btn btn-primary" onClick={() => setIdx((i) => Math.min(quizQuestions.length - 1, i + 1))}>Next</button>
          ) : !reviewing ? (
            <button className="btn btn-accent" onClick={() => setSubmitted(true)}>Submit Quiz</button>
          ) : (
            <Link to="/student/quizzes" className="btn btn-primary">Back to Quizzes</Link>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
