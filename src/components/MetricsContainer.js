export default function MetricsContainer({ children }) {
  return (
    <div className="container">
      <div className="section-block">
        <div className="metric-row">
          <div className="col-lg-12">
            <div className="metric-row metric-flush">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
