import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import RelativeTime from "../components/RelativeTime";
import TransactionValue from "../components/TransactionValue";
import useGetArchiveData from "../libs/use-get-archive-data";

export default function Account() {
  const { id } = useParams();

  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_event(limit: 30, where: {extrinsic: {signer: {_eq: "${id}"}}, section: {_eq: "balances"}}, order_by: {blockNumber: desc}) {
        id
        blockTimestamp
        blockNumber
        extrinsicIndex
        method
        section
        indexInBlock
        data
      }
    }`,
  });

  if (isLoading || !data) {
    return (
      <div className="page-inner">
        <div className="container">
          <div className="section-block">
            <div className="card" style={{ height: "800px" }}>
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
      <div className="page-inner">
        <div className="container">
          <span className="h5">Transactions </span>signed by{" "}
          <span className="text-indigo">{id}</span>
          <div className="section-block">
            <div className="card">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-nowrap">Event ID</th>
                      <th>Block</th>
                      <th className="text-nowrap">Extrinsic ID</th>
                      <th>Value</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.substrate_event.map(
                      ({
                        blockTimestamp,
                        blockNumber,
                        extrinsicIndex,
                        indexInBlock,
                        method,
                        section,
                        id,
                        data,
                      }) => (
                        <tr key={id}>
                          <td className="text-indigo text-nowrap">
                            {blockNumber}-{indexInBlock}
                          </td>
                          <td className="text-indigo">
                            <Link to={`/block/${blockNumber}`}>
                              {blockNumber}
                            </Link>
                          </td>
                          <td className="text-nowrap">
                            {blockNumber}-{extrinsicIndex}
                          </td>

                          <td className="font-weight-bolder">
                            <TransactionValue transaction={data} />
                          </td>
                          <td className="text-nowrap">
                            <RelativeTime
                              timestamp={parseInt(blockTimestamp)}
                            />
                          </td>
                          <td className="text-indigo">
                            {section} ({method})
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
