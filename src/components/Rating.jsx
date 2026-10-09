import { Star } from 'lucide-react';

export default function Rating({ value, count, size = 13 }) {
  return (
    <div className="rating-row">
      <span className="stars">
        <Star size={size} fill="currentColor" strokeWidth={0} />
      </span>
      <span>{value}</span>
      {count != null && <span className="text-faint" style={{ fontWeight: 400 }}>({count.toLocaleString()})</span>}
    </div>
  );
}
