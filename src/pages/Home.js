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
                      <sub>
                        <i class="oi oi-people"></i>
                      </sub>
                      <span class="value">Polkadot</span>
                    </p>
                  </span>
                </div>
                <div class="col">
                  <span class="metric metric-bordered align-items-center">
                    <h2 class="metric-label">Version</h2>
                    <p class="metric-value h3">
                      <sub>
                        <i class="oi oi-people"></i>
                      </sub>
                      <span class="value">8</span>
                    </p>
                  </span>
                </div>
                <div class="col">
                  <span class="metric metric-bordered align-items-center">
                    <h2 class="metric-label">Chain height</h2>
                    <p class="metric-value h3">
                      <sub>
                        <i class="oi oi-people"></i>
                      </sub>
                      <span class="value">8</span>
                    </p>
                  </span>
                </div>
                <div class="col">
                  <span class="metric metric-bordered align-items-center">
                    {/* <h2 class="metric-label">In sync</h2> */}
                    {/* <p class="metric-value h3">
                      <sub>
                        <i class="oi oi-people"></i>
                      </sub>
                      <span class="value">true</span>
                    </p> */}
                    <div class="metric-badge">
                      <span class="badge badge-lg badge-success">
                        <span class="oi oi-media-record pulse mr-1"></span>{" "}
                        SYNCHRONISED
                      </span>
                    </div>
                  </span>
                  {/* <span class="metric metric-bordered">
                    <div class="metric-badge">
                      <span class="badge badge-lg badge-success">
                        <span class="oi oi-media-record pulse mr-1"></span>{" "}
                        ONGOING TASKS
                      </span>
                    </div>
                    <p class="metric-value h3">
                      <sub>
                        <i class="oi oi-timer"></i>
                      </sub>
                      <span class="value">8</span>
                    </p>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
