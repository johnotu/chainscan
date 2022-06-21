import RelativeTime from "./RelativeTime";
import ShortHex from "./ShortHex";

export default function TransferListItem({
  blockTimestamp,
  blockNumber,
  data,
  extrinsicIndex,
}) {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <div>
        <div>
          <span className="font-weight-bold">Extrinsic#</span>{" "}
          <span className="font-weight-bold ml-3 text-indigo">
            {blockNumber}-{extrinsicIndex}
          </span>
        </div>
        <div>
          <span className="small">From</span>{" "}
          <span className="small ml-1 text-indigo">
            <ShortHex hex={data.param0.value} />
          </span>
          <span className="small ml-3">To</span>{" "}
          <span className="small ml-1 text-indigo">
            <ShortHex hex={data.param1.value} />
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex flex-column">
          <span className="font-weight-bold text-muted">
            <RelativeTime timestamp={parseInt(blockTimestamp)} />
          </span>
          {/* <span className="text-blue">302 DOT</span> */}
        </div>
        <div>
          {/* <span className="oi oi-circle-check text-success ml-3"></span> */}
        </div>
      </div>
    </div>
  );
}
