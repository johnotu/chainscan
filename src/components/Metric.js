export default function Metric({ label, value, isBadge, badgeStatus }) {
  return (
    <div className="col">
      <span className="metric metric-bordered align-items-center">
        {isBadge ? (
          <div className="metric-badge">
            <span className={`badge badge-lg badge-${badgeStatus}`}>
              <span className="oi oi-media-record pulse mr-1"></span> {value}
            </span>
          </div>
        ) : (
          <>
            <h2 className="metric-label">{label}</h2>
            <p className="metric-value h3">
              <span className="value text-capitalize">{value}</span>
            </p>
          </>
        )}
      </span>
    </div>
  );
}
