import { Link } from "react-router-dom";
import TransferListItem from "../../components/TransferListItem";

export default function TransfersShortList() {
  return (
    <div className="col-12 col-lg-6 col-xl-6">
      <div className="card card-fluid">
        <div className="card-body">
          <span className="d-flex justify-content-between">
            <h3 className="card-title mb-4">
              <span className="oi oi-transfer mr-1"></span> Transfers
            </h3>
            <Link to="/transfer" className="btn btn-dark btn-sm">
              All
            </Link>
          </span>
          <div className="list-group mb-3">
            <TransferListItem />
            <TransferListItem />
            <TransferListItem />
            <TransferListItem />
            <TransferListItem />
          </div>
        </div>
      </div>
    </div>
  );
}
