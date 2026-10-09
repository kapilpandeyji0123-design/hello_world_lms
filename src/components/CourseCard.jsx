import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Clock } from 'lucide-react';
import Rating from './Rating';

export default function CourseCard({ course }) {
  const [wished, setWished] = useState(false);
  return (
    <div className="card card-hover course-card">
      <div className="course-thumb" style={{ background: course.gradient }}>
        <span className="course-level-badge">{course.level}</span>
        <button
          className={`wishlist-btn ${wished ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setWished(!wished); }}
          aria-label="Toggle wishlist"
        >
          <Heart size={15} fill={wished ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="course-body">
        <span className="course-cat">{course.category}</span>
        <Link to={`/courses/${course.id}`}>
          <h3 className="course-title">{course.title}</h3>
        </Link>
        <span className="course-instructor">by {course.instructor}</span>
        <div className="flex items-center gap-12">
          <Rating value={course.rating} count={course.reviews} />
        </div>
        <div className="course-meta-row">
          <span className="flex items-center gap-8"><Users size={13} /> {course.students.toLocaleString()}</span>
          <span className="flex items-center gap-8"><Clock size={13} /> {course.duration}</span>
        </div>
        <div className="course-footer">
          <div>
            <span className="price-old">₹{course.oldPrice}</span>
            <span className="price">₹{course.price}</span>
          </div>
          <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm">Enroll</Link>
        </div>
      </div>
    </div>
  );
}
