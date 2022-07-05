import { Link, useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import RelativeTime from "../components/RelativeTime";
import Search from "../components/Search";
import ShortHex from "../components/ShortHex";
import TransactionValue from "../components/TransactionValue";
import useGetArchiveData from "../libs/use-get-archive-data";

export default function Transactions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = { section: "balances", method: "" };
  for (let param of searchParams) {
    params[param[0]] = param[1];
  }
  let queryCondition = `where: {section: {_eq: "balances"}, `;
  if (params.method) {
    queryCondition += `method: {_eq: "${params.method}"}`;
  }
  queryCondition += `}, `;

  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_event(limit: 30, ${queryCondition}, order_by: {blockNumber: desc}) {
        blockTimestamp
        blockNumber
        extrinsicIndex
        id
        method
        section
        indexInBlock
        data
        extrinsic {
          signer
        }
      }
    }`,
  });
  if (isLoading || !data) {
    return (
      <div className="page-inner">
        <div className="container">
          <Search />

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
          <Search />
          <Filter
            params={params}
            setSearchParams={setSearchParams}
            isTransactions
          />
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
                      <th>Signer</th>
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
                        extrinsic,
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
                          <td>
                            <Link to={`/account/${extrinsic.signer}`}>
                              <ShortHex hex={extrinsic.signer} />
                            </Link>
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
