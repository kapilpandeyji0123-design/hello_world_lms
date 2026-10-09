import { Link } from 'react-router-dom';
import { HelpCircle, Clock } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { studentNav } from '../../data/navConfig';

const quizzes = [
  { id: 'spring-boot-basics', title: 'Spring Boot Basics', course: 'Java Full Stack Development', questions: 10, time: '15 min', status: 'Not Started' },
  { id: 'oop-concepts', title: 'OOP Concepts Check', course: 'Java Full Stack Development', questions: 8, time: '10 min', status: 'Completed', score: '7/8' },
  { id: 'ml-basics', title: 'Machine Learning Basics', course: 'Machine Learning Foundations', questions: 12, time: '18 min', status: 'Not Started' },
];

export default function Quizzes() {
  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Quizzes</div>
      <p className="page-sub">Test your understanding after each module.</p>

      <div className="grid-3 mt-24">
        {quizzes.map((q) => (
          <div className="card" key={q.id} style={{ padding: 20 }}>
            <div className="why-icon"><HelpCircle size={20} /></div>
            <h4 style={{ fontSize: 15.5, marginTop: 14 }}>{q.title}</h4>
            <p className="text-faint" style={{ fontSize: 12.5, marginTop: 4 }}>{q.course}</p>
            <div className="flex items-center gap-16 mt-16 text-soft" style={{ fontSize: 12.5 }}>
              <span>{q.questions} Questions</span>
              <span className="flex items-center gap-8"><Clock size={13} /> {q.time}</span>
            </div>
            {q.status === 'Completed' ? (
              <div className="flex items-center justify-between mt-16">
                <span className="badge badge-success">Score {q.score}</span>
                <Link to={`/student/quiz/${q.id}`} className="btn btn-outline btn-sm">Review</Link>
              </div>
            ) : (
              <Link to={`/student/quiz/${q.id}`} className="btn btn-primary btn-sm btn-block mt-16">Start Quiz</Link>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
