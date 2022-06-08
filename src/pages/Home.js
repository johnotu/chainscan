export default function Home() {
  return (
    <div class="page-inner">
      <div class="container">
        <div class="section-block">
          <div class="metric-row">
            <div class="col-lg-12">
              <div class="metric-row metric-flush">
                <div class="col">
                  <span class="metric metric-bordered align-items-center">
                    <h2 class="metric-label">Network</h2>
                    <p class="metric-value h3">
                      <span class="value">Polkadot</span>
                    </p>
                  </span>
                </div>
                <div class="col">
                  <span class="metric metric-bordered align-items-center">
                    <h2 class="metric-label">Version</h2>
                    <p class="metric-value h3">
                      <span class="value">8</span>
                    </p>
                  </span>
                </div>
                <div class="col">
                  <span class="metric metric-bordered align-items-center">
                    <h2 class="metric-label">Chain height</h2>
                    <p class="metric-value h3">
                      <span class="value">8</span>
                    </p>
                  </span>
                </div>
                <div class="col">
                  <span class="metric metric-bordered align-items-center">
                    <div class="metric-badge">
                      <span class="badge badge-lg badge-success">
                        <span class="oi oi-media-record pulse mr-1"></span>{" "}
                        SYNCHRONISED
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 col-xl-6">
            <div class="card card-fluid">
              <div class="card-body">
                <h3 class="card-title mb-4">
                  <span class="oi oi-grid-two-up mr-1"></span> Blocks
                </h3>
                <div class="list-group mb-3">
                  <div class="list-group-header">Block # 123456</div>
                  <span class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <span>Includes 2 Extrinsic 1 Event</span>
                    <span>
                      2hrs 12mins ago
                      <span class="badge badge-danger badge-pill">14</span>
                    </span>
                  </span>
                  <div class="list-group-header">List header</div>
                  <span class="list-group-item  d-flex justify-content-between align-items-center">
                    List item with badge
                    <span class="badge badge-danger badge-pill">14</span>
                  </span>
                  <div class="list-group-header">List header</div>
                  <span class="list-group-item  d-flex justify-content-between align-items-center">
                    List item with badge
                    <span class="badge badge-danger badge-pill">14</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
