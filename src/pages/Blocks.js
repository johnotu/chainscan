import Loader from "../components/Loader";
import RelativeTime from "../components/RelativeTime";
import Search from "../components/Search";
import ShortHex from "../components/ShortHex";
import useGetArchiveData from "../libs/use-get-archive-data";

export default function Blocks() {
  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_block(limit: 30, order_by: {height: desc}) {
        id
        height
        hash
        extrinsics
        events
        validatorId
        timestamp
      }
    }`,
  });
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
      <div className="page-inner">
        <div className="container">
          <Search />
          <div className="section-block">
            <div className="card">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-nowrap">Block</th>
                      <th>Time</th>
                      <th className="">Extrinsics</th>
                      <th>Events</th>
                      <th>Validator</th>
                      <th>Block hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.substrate_block.map(
                      ({
                        id,
                        height,
                        hash,
                        events,
                        extrinsics,
                        timestamp,
                        validatorId,
                      }) => (
                        <tr key={id}>
                          <td className="text-indigo text-nowrap">{height}</td>
                          <td className="text-indigo">
                            <RelativeTime timestamp={parseInt(timestamp)} />
                          </td>
                          <td className="">{extrinsics.length}</td>
                          <td className="">{events.length}</td>
                          <td className="text-indigo">
                            <ShortHex hex={validatorId} />
                          </td>
                          <td className="text-indigo">
                            <ShortHex hex={hash} />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
