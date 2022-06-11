export default function TransferListItem() {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <div>
        <div>
          <span className="font-weight-bold">Extrinsic#</span>{" "}
          <span className="font-weight-bold ml-3 text-indigo">12345-2</span>
        </div>
        <div>
          <span className="small">From</span>{" "}
          <span className="small ml-1 text-indigo">13iTUd...</span>
          <span className="small ml-3">To</span>{" "}
          <span className="small ml-1 text-indigo">12k6zo...</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex flex-column">
          <span className="font-weight-bold text-muted">15 mins ago</span>
          <span className="text-blue">302 DOT</span>
        </div>
        <div>
          <span className="oi oi-circle-check text-success ml-3"></span>
        </div>
      </div>
    </div>
  );
}
