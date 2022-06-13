import { useContext } from "react";
import Loader from "../../components/Loader";
import useGetArchiveData from "../../libs/use-get-archive-data";
import { ArchiveContext } from "../../store/contexts";

export default function ArchiveInfo() {
  const { archive } = useContext(ArchiveContext);

  const { isLoading, data } = useGetArchiveData({
    query: `{
      indexerStatus {
        chainHeight
        hydraVersion
        inSync
      }
    }`,
  });

  if (isLoading) {
    return (
      <div className="section-block">
        <div className="metric-row">
          <div className="col-lg-12">
            <div className="metric-row metric-flush">
              <span className="metric metric-bordered align-items-center">
                <Loader />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const { chainHeight, hydraVersion, inSync } = data.indexerStatus;

    return (
      <div className="section-block">
        <div className="metric-row">
          <div className="col-lg-12">
            <div className="metric-row metric-flush">
              <div className="col">
                <span className="metric metric-bordered align-items-center">
                  <h2 className="metric-label">Network</h2>
                  <p className="metric-value h3">
                    <span className="value text-capitalize">
                      {archive.network}
                    </span>
                  </p>
                </span>
              </div>
              <div className="col">
                <span className="metric metric-bordered align-items-center">
                  <h2 className="metric-label">Version</h2>
                  <p className="metric-value h3">
                    <span className="value">{hydraVersion}</span>
                  </p>
                </span>
              </div>
              <div className="col">
                <span className="metric metric-bordered align-items-center">
                  <h2 className="metric-label">Chain height</h2>
                  <p className="metric-value h3">
                    <span className="value">{chainHeight}</span>
                  </p>
                </span>
              </div>
              <div className="col">
                <span className="metric metric-bordered align-items-center">
                  <div className="metric-badge">
                    {inSync ? (
                      <span className="badge badge-lg badge-success">
                        <span className="oi oi-media-record pulse mr-1"></span>{" "}
                        SYNCHRONISED
                      </span>
                    ) : (
                      <span className="badge badge-lg badge-warning">
                        <span className="oi oi-media-record pulse mr-1"></span>{" "}
                        NOT SYNCHRONISED
                      </span>
                    )}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
