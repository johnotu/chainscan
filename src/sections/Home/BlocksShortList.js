import { Link } from "react-router-dom";
import BlockListItem from "../../components/BlockListItem";

export default function BlocksShortList() {
  return (
    <div className="col-12 col-lg-6 col-xl-6">
      <div className="card card-fluid">
        <div className="card-body">
          <span className="d-flex justify-content-between">
            <h3 className="card-title mb-4">
              <span className="oi oi-grid-two-up mr-1"></span> Blocks
            </h3>
            <Link to="/block" className="btn btn-dark btn-sm">
              All
            </Link>
          </span>
          <div className="list-group mb-3">
            <BlockListItem />
            <BlockListItem />
            <BlockListItem />
            <BlockListItem />
            <BlockListItem />
          </div>
        </div>
      </div>
    </div>
  );
}
