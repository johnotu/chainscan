import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import TransferListItem from "../../components/TransferListItem";
import useGetArchiveData from "../../libs/use-get-archive-data";

export default function TransfersShortList() {
  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_event(limit: 10, order_by: {blockNumber: desc}, where: {section: {_eq: "balances"}, method: {_eq: "Transfer"}}) {
        blockTimestamp
        blockNumber
        data
        extrinsicIndex
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
                <span className="oi oi-transfer mr-1"></span> Transfers
              </h3>
              <Link to="/transfer" className="btn btn-dark btn-sm">
                All
              </Link>
            </span>
            <div className="list-group mb-3 home-section overflow-auto">
              {data.substrate_event.map((event) => (
                <TransferListItem {...event} key={event.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
