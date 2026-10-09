import { Coffee, Code2, BarChart3, BrainCircuit, Cloud, ShieldCheck, Pencil, Trash2, Plus } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { adminNav } from '../../data/navConfig';
import { categories } from '../../data/mockData';

const icons = { Coffee, Code2, BarChart3, BrainCircuit, Cloud, ShieldCheck };

export default function AdminCategories() {
  return (
    <DashboardLayout items={adminNav} roleLabel="Admin" userInitials="AD" notifPath="/admin/reports">
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="page-title">Categories</div>
          <p className="page-sub">Manage course categories shown across SmartLearn.</p>
        </div>
        <button className="btn btn-primary"><Plus size={16} /> Add Category</button>
      </div>

      <div className="grid-3 mt-24">
        {categories.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div className="card" key={c.id} style={{ padding: 20 }}>
              <div className="flex items-center justify-between">
                <div className="category-icon"><Icon size={20} /></div>
                <div className="flex gap-8">
                  <button className="icon-btn" aria-label="Edit"><Pencil size={13} /></button>
                  <button className="icon-btn" aria-label="Delete"><Trash2 size={13} /></button>
                </div>
              </div>
              <h4 style={{ fontSize: 15.5, marginTop: 14 }}>{c.name}</h4>
              <span className="text-faint" style={{ fontSize: 12.5 }}>{c.count} courses</span>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
