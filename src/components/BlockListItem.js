export default function BlockListItem() {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <div>
        <div>
          <span className="font-weight-bold">Block#</span>{" "}
          <span className="font-weight-bold ml-3 text-indigo">12345</span>
        </div>
        <div>
          <span className="small">Includes</span>{" "}
          <span className="small ml-3 text-indigo">2 Extrinsic</span>
          <span className="small ml-3 text-indigo">2 Event</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="font-weight-bold text-muted">17 seconds ago</span>
        <span className="oi oi-clock text-warning ml-3"></span>
      </div>
    </div>
  );
}
