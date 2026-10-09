import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import PublicLayout from '../layouts/PublicLayout';
import CourseCard from '../components/CourseCard';
import { courses, categories } from '../data/mockData';

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const sorts = ['Most Popular', 'Highest Rated', 'Newest', 'Price: Low to High'];

export default function Courses() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All Levels');
  const [sort, setSort] = useState('Most Popular');
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    let list = courses.filter((c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) &&
      (category === 'All' || c.category === category) &&
      (level === 'All Levels' || c.level === level)
    );
    if (sort === 'Highest Rated') list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === 'Price: Low to High') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'Newest') list = [...list].reverse();
    return list;
  }, [query, category, level, sort]);

  return (
    <PublicLayout>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <h1 style={{ fontSize: 34 }}>Explore Courses</h1>
          <p className="section-sub mt-8">Find the right course to build your next skill.</p>

          <div className="search-pill w-full mt-24" style={{ maxWidth: 520, padding: '12px 18px' }}>
            <Search size={16} />
            <input
              placeholder="Search courses, skills, or topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-8 mt-24" style={{ flexWrap: 'wrap' }}>
            <span className="flex items-center gap-8 text-soft" style={{ fontSize: 13, fontWeight: 600 }}>
              <SlidersHorizontal size={14} /> Filters:
            </span>
            <button className={`filter-pill ${category === 'All' ? 'active' : ''}`} onClick={() => setCategory('All')}>All Categories</button>
            {categories.map((c) => (
              <button key={c.id} className={`filter-pill ${category === c.name ? 'active' : ''}`} onClick={() => setCategory(c.name)}>
                {c.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8 mt-16" style={{ flexWrap: 'wrap' }}>
            {levels.map((l) => (
              <button key={l} className={`filter-pill ${level === l ? 'active' : ''}`} onClick={() => setLevel(l)}>{l}</button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-32" style={{ flexWrap: 'wrap', gap: 12 }}>
            <span className="text-soft" style={{ fontSize: 13.5 }}>{filtered.length} courses found</span>
            <select className="field" style={{ padding: '9px 14px', borderRadius: 999, border: '1.5px solid var(--line-strong)', fontSize: 13.5 }} value={sort} onChange={(e) => setSort(e.target.value)}>
              {sorts.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div className="grid-3 mt-24">
            {filtered.slice(0, visible).map((c) => <CourseCard key={c.id} course={c} />)}
          </div>

          {filtered.length === 0 && (
            <p className="text-soft mt-32" style={{ textAlign: 'center' }}>No courses match your filters yet. Try clearing a filter.</p>
          )}

          {visible < filtered.length && (
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <button className="btn btn-outline" onClick={() => setVisible(visible + 6)}>Load More Courses</button>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
