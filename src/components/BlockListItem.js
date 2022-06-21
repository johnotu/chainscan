import RelativeTime from "./RelativeTime";

export default function BlockListItem({
  height,
  extrinsics,
  events,
  timestamp,
}) {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <div>
        <div>
          <span className="font-weight-bold">Block#</span>{" "}
          <span className="font-weight-bold ml-3 text-indigo">{height}</span>
        </div>
        <div>
          <span className="small">Includes</span>{" "}
          <span className="small ml-3 text-indigo">
            {extrinsics.length} Extrinsic
          </span>
          <span className="small ml-3 text-indigo">{events.length} Event</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="font-weight-bold text-muted">
          <RelativeTime timestamp={parseInt(timestamp)} />
        </span>
        {/* <span className="oi oi-clock text-warning ml-3"></span> */}
      </div>
    </div>
  );
}
