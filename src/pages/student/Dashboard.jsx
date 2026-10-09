import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Clock, Award, ArrowRight } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import StatCard from '../../components/StatCard';
import ProgressBar from '../../components/ProgressBar';
import BarChart from '../../components/BarChart';
import { studentNav } from '../../data/navConfig';
import { enrolledCourses, weeklyHours, courses } from '../../data/mockData';

export default function StudentDashboard() {
  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Welcome back, Jordan 👋</div>
      <p className="page-sub">Continue your learning journey.</p>

      <div className="grid-4 mt-24">
        <StatCard icon={BookOpen} label="Enrolled Courses" value="8" delta="+2 this month" />
        <StatCard icon={CheckCircle2} label="Completed Courses" value="3" delta="+1 this month" color="var(--success)" bg="var(--success-tint)" />
        <StatCard icon={Clock} label="Learning Hours" value="126h" delta="+15h this week" color="var(--accent)" bg="var(--accent-tint)" />
        <StatCard icon={Award} label="Certificates" value="2" color="var(--warning)" bg="var(--warning-tint)" />
      </div>

      <div className="section-head mt-32">
        <h2 style={{ fontSize: 20 }}>Continue Learning</h2>
        <Link to="/student/my-learning" className="btn btn-ghost btn-sm">View All <ArrowRight size={14} /></Link>
      </div>
      <div className="grid-4">
        {enrolledCourses.map((c) => (
          <div className="card card-hover" key={c.id} style={{ overflow: 'hidden' }}>
            <div style={{ height: 100, background: c.gradient }} />
            <div style={{ padding: 16 }}>
              <h4 style={{ fontSize: 14, marginBottom: 10, lineHeight: 1.35 }}>{c.title}</h4>
              <ProgressBar value={c.progress} />
              <div className="text-faint mt-8" style={{ fontSize: 12 }}>Last: {c.lastLesson}</div>
              <Link to={`/student/course/${c.id}/learn`} className="btn btn-primary btn-sm btn-block mt-16">Continue</Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24, marginTop: 32 }}>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 20 }}>Weekly Learning Hours</h3>
          <BarChart data={weeklyHours} xKey="day" yKey="hours" />
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 18 }}>Learning Analytics</h3>
          <div className="flex-col gap-16">
            <div>
              <div className="progress-label"><span>Course Completion</span><span>62%</span></div>
              <ProgressBar value={62} showPercent={false} />
            </div>
            <div>
              <div className="progress-label"><span>Quiz Performance</span><span>81%</span></div>
              <ProgressBar value={81} showPercent={false} />
            </div>
            <div>
              <div className="progress-label"><span>Assignment Score</span><span>74%</span></div>
              <ProgressBar value={74} showPercent={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-head mt-32">
        <h2 style={{ fontSize: 20 }}>Recommended For You</h2>
        <Link to="/student/recommendations" className="btn btn-ghost btn-sm">See All <ArrowRight size={14} /></Link>
      </div>
      <div className="grid-4">
        {courses.slice(4, 8).map((c) => (
          <Link to={`/courses/${c.id}`} className="card card-hover" key={c.id} style={{ overflow: 'hidden' }}>
            <div style={{ height: 90, background: c.gradient }} />
            <div style={{ padding: 14 }}>
              <span className="course-cat">{c.category}</span>
              <h4 style={{ fontSize: 13.5, marginTop: 4, lineHeight: 1.35 }}>{c.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
}
