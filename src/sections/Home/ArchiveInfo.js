export default function ArchiveInfo() {
  return (
    <div className="section-block">
      <div className="metric-row">
        <div className="col-lg-12">
          <div className="metric-row metric-flush">
            <div className="col">
              <span className="metric metric-bordered align-items-center">
                <h2 className="metric-label">Network</h2>
                <p className="metric-value h3">
                  <span className="value">Polkadot</span>
                </p>
              </span>
            </div>
            <div className="col">
              <span className="metric metric-bordered align-items-center">
                <h2 className="metric-label">Version</h2>
                <p className="metric-value h3">
                  <span className="value">8</span>
                </p>
              </span>
            </div>
            <div className="col">
              <span className="metric metric-bordered align-items-center">
                <h2 className="metric-label">Chain height</h2>
                <p className="metric-value h3">
                  <span className="value">8</span>
                </p>
              </span>
            </div>
            <div className="col">
              <span className="metric metric-bordered align-items-center">
                <div className="metric-badge">
                  <span className="badge badge-lg badge-success">
                    <span className="oi oi-media-record pulse mr-1"></span>{" "}
                    SYNCHRONISED
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
