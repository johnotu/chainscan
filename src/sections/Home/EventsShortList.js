import { Link } from "react-router-dom";
import EventListItem from "../../components/EventListItem";
import Loader from "../../components/Loader";
import useGetArchiveData from "../../libs/use-get-archive-data";

export default function EventsShortList() {
  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_event(limit: 10, order_by: {blockNumber: desc}) {
        blockTimestamp
        blockNumber
        extrinsicIndex
        id
        method
        section
        indexInBlock
      }
    }`,
  });
  if (isLoading || !data) {
    return (
      <div className="card-deck-xl">
        <div className="card card-fluid home-section">
          <div className="d-flex align-items-center justify-content-center h-100">
            <Loader />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-deck-xl">
        <div className="card card-fluid">
          <div className="card-header">
            <span className="d-flex justify-content-between">
              <span>
                <span className="oi oi-calendar mr-1"></span>Events
              </span>
              <Link to="/event" className="btn btn-dark btn-sm">
                All
              </Link>
            </span>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-nowrap">Event ID</th>
                  <th>Block</th>
                  <th className="text-nowrap">Extrinsic ID</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.substrate_event.map((event) => (
                  <EventListItem {...event} key={event.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
