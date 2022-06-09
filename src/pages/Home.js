import BlockListItem from "../components/BlockListItem";
import TransferListItem from "../components/TransferListItem";

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
                  <BlockListItem />
                  <BlockListItem />
                  <BlockListItem />
                  <BlockListItem />
                  <BlockListItem />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-6">
            <div class="card card-fluid">
              <div class="card-body">
                <h3 class="card-title mb-4">
                  <span class="oi oi-transfer mr-1"></span> Transfers
                </h3>
                <div class="list-group mb-3">
                  <TransferListItem />
                  <TransferListItem />
                  <TransferListItem />
                  <TransferListItem />
                  <TransferListItem />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-deck-xl">
          <div class="card card-fluid">
            <div class="card-header">Active Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}
