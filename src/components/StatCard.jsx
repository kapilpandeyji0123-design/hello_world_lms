export default function StatCard({ icon: Icon, label, value, delta, color = 'var(--brand)', bg = 'var(--brand-tint)' }) {
  return (
    <div className="card stat-card">
      <div className="stat-card-top">
        <div className="stat-icon" style={{ background: bg, color }}>
          <Icon size={18} />
        </div>
        {delta && <span className="stat-delta up">{delta}</span>}
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-name">{label}</div>
    </div>
  );
}
