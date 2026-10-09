export default function BarChart({ data, xKey, yKey, max }) {
  const maxVal = max || Math.max(...data.map((d) => d[yKey])) * 1.15;
  return (
    <div className="bar-chart">
      {data.map((d, i) => (
        <div className="bar-col" key={i}>
          <div className="bar" style={{ height: `${(d[yKey] / maxVal) * 100}%` }} title={`${d[yKey]}`} />
          <span className="bar-label">{d[xKey]}</span>
        </div>
      ))}
    </div>
  );
}
