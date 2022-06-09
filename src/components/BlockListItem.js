export default function BlockListItem() {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <div>
        <div>
          <span className="h6">Block#</span>{" "}
          <span className="h5 ml-3 text-indigo">12345</span>
        </div>
        <div>
          <span className="p">Includes</span>{" "}
          <span className="p ml-3 text-indigo">2 Extrinsic</span>
          <span className="p ml-3 text-indigo">2 Event</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="font-weight-bold text-muted">17 seconds ago</span>
        <span className="oi oi-clock ml-3"></span>
      </div>
    </div>
  );
}
