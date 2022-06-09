export default function TransferListItem() {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <div>
        <div>
          <span className="h6">Extrinsic#</span>{" "}
          <span className="h5 ml-3 text-indigo">12345-2</span>
        </div>
        <div>
          <span className="small">From</span>{" "}
          <span className="small ml-3 text-indigo">13iTUd....eoPDjx</span>
          <span className="small">To</span>{" "}
          <span className="small ml-3 text-indigo">12k6zo....dWP6Sr</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="font-weight-bold text-muted">302 DOT</span>
        <span className="oi oi-clock ml-3"></span>
      </div>
    </div>
  );
}
