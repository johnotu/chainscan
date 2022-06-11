import { Link } from "react-router-dom";

export default function EventsShortList() {
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
              <tr>
                <td className="text-indigo text-nowrap">120002-4</td>
                <td className="text-indigo">120002</td>
                <td className="text-nowrap">120002-2</td>
                <td className="text-nowrap">2 mins ago</td>
                <td>parainclusion (CandidateBacked)</td>
              </tr>
              <tr>
                <td className="text-indigo text-nowrap">120002-4</td>
                <td className="text-indigo">120002</td>
                <td className="text-nowrap">120002-2</td>
                <td className="text-nowrap">2 mins ago</td>
                <td>parainclusion (CandidateBacked)</td>
              </tr>
              <tr>
                <td className="text-indigo text-nowrap">120002-4</td>
                <td className="text-indigo">120002</td>
                <td className="text-nowrap">120002-2</td>
                <td className="text-nowrap">2 mins ago</td>
                <td>parainclusion (CandidateBacked)</td>
              </tr>
              <tr>
                <td className="text-indigo text-nowrap">120002-4</td>
                <td className="text-indigo">120002</td>
                <td className="text-nowrap">120002-2</td>
                <td className="text-nowrap">2 mins ago</td>
                <td>parainclusion (CandidateBacked)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
