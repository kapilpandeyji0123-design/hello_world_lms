import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Rating from '../../components/Rating';
import { studentNav } from '../../data/navConfig';
import { courses } from '../../data/mockData';

const basedOnLearning = [
  { course: courses[0], reason: 'Because you completed Java Basics' },
  { course: courses[5], reason: 'Related to Spring Boot & REST APIs' },
];
const improveSkills = [
  { course: courses[3], reason: 'Strengthens your Data Science foundation' },
  { course: courses[7], reason: 'Popular next step after Java Full Stack' },
];

function Row({ items }) {
  return (
    <div className="grid-3">
      {items.map(({ course: c, reason }) => (
        <div className="card card-hover" key={c.id} style={{ overflow: 'hidden' }}>
          <div style={{ height: 120, background: c.gradient }} />
          <div style={{ padding: 18 }}>
            <span className="badge badge-brand">{reason}</span>
            <Link to={`/courses/${c.id}`}><h4 style={{ fontSize: 15, margin: '10px 0 4px' }}>{c.title}</h4></Link>
            <span className="course-instructor">by {c.instructor}</span>
            <div className="mt-8"><Rating value={c.rating} count={c.reviews} /></div>
            <Link to={`/courses/${c.id}`} className="btn btn-primary btn-sm btn-block mt-16">Enroll</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Recommendations() {
  return (
    <DashboardLayout items={studentNav} roleLabel="Student" userInitials="JD" notifPath="/student/notifications">
      <div className="page-title">Recommended For You 🎯</div>
      <p className="page-sub">Courses selected based on your interests and learning activity.</p>

      <h3 className="mt-32" style={{ fontSize: 16, marginBottom: 14 }}>Based on Your Learning</h3>
      <Row items={basedOnLearning} />

      <h3 className="mt-32" style={{ fontSize: 16, marginBottom: 14 }}>Improve Your Skills</h3>
      <Row items={improveSkills} />
    </DashboardLayout>
  );
}
