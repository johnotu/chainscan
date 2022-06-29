import EventListItem from "./EventListItem";
import Loader from "./Loader";

export default function ListTable({ isLoading, data }) {
  if (isLoading || !data) {
    return (
      <div className="section-block">
        <div className="card" style={{ height: "800px" }}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <Loader />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="section-block">
        <div className="card">
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
