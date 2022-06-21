import { Link } from "react-router-dom";
import BlockListItem from "../../components/BlockListItem";
import Loader from "../../components/Loader";
import useGetArchiveData from "../../libs/use-get-archive-data";

export default function BlocksShortList() {
  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_block(limit: 10, order_by: {height: desc}) {
        height
        extrinsics
        events
        timestamp
        id
      }
    }`,
  });

  if (isLoading || !data) {
    return (
      <div className="col-12 col-lg-6 col-xl-6">
        <div className="card card-fluid">
          <div className="card-body">
            <div className="list-group mb-3 home-section overflow-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <Loader />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
            <div className="list-group mb-3 home-section overflow-auto">
              {data.substrate_block.map((block) => (
                <BlockListItem {...block} key={block.id} />
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
