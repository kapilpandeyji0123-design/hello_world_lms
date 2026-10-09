export default function ProgressBar({ value, label, showPercent = true }) {
  return (
    <div>
      {(label || showPercent) && (
        <div className="progress-label">
          <span>{label}</span>
          {showPercent && <span>{value}%</span>}
        </div>
      )}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
