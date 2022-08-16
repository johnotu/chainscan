import { useContext } from "react";
import { Line } from "react-chartjs-2";
import Loader from "../../components/Loader";
import Metric from "../../components/Metric";
import MetricsContainer from "../../components/MetricsContainer";
import useGetArchiveData from "../../libs/use-get-archive-data";
import { ArchiveContext } from "../../store/contexts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

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

  const chartData = {
    type: "line",
    _data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          fill: true,
          label: "Data 1",
          borderColor: "purple",
          backgroundColor: "purple",
          data: [10, 23, 54, 93, 12, 3, 88],
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Stacked Area",
      },
      // tooltips: {
      //   mode: "index",
      //   position: "nearest",
      // },
      // hover: {
      //   mode: "index",
      // },
    },
  };

  const { options, _data } = chartData;

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
      <>
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
        <div className="container">
          <div className="section-block">
            <div className="card card-fluid">
              <div className="card-body">
                <h3 className="card-title mb-4">Transfer History in 30 Days</h3>
                <Line options={options} data={_data} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
