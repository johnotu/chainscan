import { useContext } from "react";
import Loader from "../../components/Loader";
import Metric from "../../components/Metric";
import MetricsContainer from "../../components/MetricsContainer";
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

  if (isLoading || !data) {
    return (
      <MetricsContainer>
        <span className="metric metric-bordered align-items-center">
          <Loader />
        </span>
      </MetricsContainer>
    );
  } else {
    const { chainHeight, hydraVersion, inSync } = data.indexerStatus;

    return (
      <MetricsContainer>
        <Metric label="Network" value={archive.network} />
        <Metric label="Version" value={hydraVersion} />
        <Metric label="Chain height" value={chainHeight} />
        {inSync ? (
          <Metric isBadge value="SYNCHRONISED" badgeStatus="success" />
        ) : (
          <Metric isBadge value="NOT SYNCHRONISED" badgeStatus="warning" />
        )}
      </MetricsContainer>
    );
  }
}
