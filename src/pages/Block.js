import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import RelativeTime from "../components/RelativeTime";
import ShortHex from "../components/ShortHex";
import TransactionValue from "../components/TransactionValue";
import useGetArchiveData from "../libs/use-get-archive-data";

export default function Block() {
  const { id } = useParams();
  const [openTab, setOpenTab] = useState("extrinsics");

  const isHash = /^[0x]/.test(id);

  let queryCondition = ` where: {`;
  if (isHash) {
    queryCondition += `hash: {_eq: "${id}"}, `;
  } else {
    queryCondition += `height: {_eq: "${id}"}`;
  }
  queryCondition += `} `;

  const { isLoading, data } = useGetArchiveData({
    query: `{
      substrate_block(${queryCondition}) {
        id
        height
        hash
        parentHash
        substrate_extrinsics {
          hash
          indexInBlock
          name
          id
          section
          method
        }
        substrate_events {
          indexInBlock
          extrinsicIndex
          extrinsicName
          id
          section
          method
          data
          extrinsic {
            signer
          }
        }
        stateRoot
        validatorId
        timestamp
        version
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
  } else if (data.substrate_block.length <= 0) {
    return (
      <div className="section-block">
        <div className="card" style={{ height: "800px" }}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <h5>Sorry! Nothing to see here</h5>
          </div>
        </div>
      </div>
    );
  } else {
    const {
      height,
      hash,
      parentHash,
      stateRoot,
      timestamp,
      validatorId,
      version,
      substrate_extrinsics,
      substrate_events,
    } = data.substrate_block[0];
    const transactions = substrate_events.filter(
      (e) => e.section === "balances"
    );

    return (
      <div className="page-inner">
        <div className="container">
          <h5>Block #{height}</h5>
          <div className="section-block">
            <div className="card">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="font-weight-bolder">Timestamp</td>
                      <td>{new Date(parseInt(timestamp)).toISOString()}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bolder">Block time</td>
                      <td>
                        <RelativeTime timestamp={parseInt(timestamp)} />
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bolder">Hash</td>
                      <td>{hash}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bolder">Parent hash</td>
                      <td>{parentHash}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bolder">State root</td>
                      <td>{stateRoot}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bolder">Validator</td>
                      <td>{validatorId}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bolder">Spec version</td>
                      <td>{version}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="section-block">
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <span
                      className={`nav-link ${
                        openTab === "extrinsics" ? "active show" : ""
                      }`}
                      data-toggle="tab"
                      onClick={() => setOpenTab("extrinsics")}
                      style={{ cursor: "pointer" }}
                    >
                      Extrinsics ({substrate_extrinsics.length})
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={`nav-link ${
                        openTab === "events" ? "active show" : ""
                      }`}
                      data-toggle="tab"
                      onClick={() => setOpenTab("events")}
                      style={{ cursor: "pointer" }}
                    >
                      Events ({substrate_events.length})
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={`nav-link ${
                        openTab === "transfers" ? "active show" : ""
                      }`}
                      data-toggle="tab"
                      onClick={() => setOpenTab("transfers")}
                      style={{ cursor: "pointer" }}
                    >
                      Transactions ({transactions.length})
                    </span>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div id="myTabContent" className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      openTab === "extrinsics" ? "active show" : ""
                    }`}
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-nowrap">Extrinsic ID</th>
                            <th>Hash</th>
                            <th className="">Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {substrate_extrinsics.map(
                            ({
                              indexInBlock,
                              hash,
                              name,
                              id,
                              section,
                              method,
                            }) => (
                              <tr key={id}>
                                <td className="text-indigo text-nowrap">
                                  {height}-{indexInBlock}
                                </td>
                                <td className="text-indigo">
                                  <ShortHex hex={hash} />
                                </td>
                                <td className="text-nowrap">
                                  <RelativeTime
                                    timestamp={parseInt(timestamp)}
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
                  <div
                    className={`tab-pane fade ${
                      openTab === "events" ? "active show" : ""
                    }`}
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-nowrap">Event ID</th>
                            <th className="text-nowrap">Extrinsic ID</th>
                            <th>Action</th>
                            {/* <th>Name</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {substrate_events.map(
                            ({
                              indexInBlock,
                              extrinsicIndex,
                              extrinsicName,
                              id,
                              section,
                              method,
                            }) => (
                              <tr key={id}>
                                <td className="text-indigo text-nowrap">
                                  {height}-{indexInBlock}
                                </td>
                                <td className="text-indigo text-nowrap">
                                  {height}-{extrinsicIndex}
                                </td>
                                <td className="text-indigo">
                                  {section} ({method})
                                </td>
                                {/* <td>{extrinsicName}</td> */}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      openTab === "transfers" ? "active show" : ""
                    }`}
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-nowrap">Event ID</th>
                            <th className="text-nowrap">Extrinsic ID</th>

                            <th>Value</th>
                            <th>Signer</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map(
                            ({
                              indexInBlock,
                              extrinsicIndex,
                              data,
                              id,
                              section,
                              method,
                              extrinsic,
                            }) => (
                              <tr key={id}>
                                <td className="text-indigo text-nowrap">
                                  {height}-{indexInBlock}
                                </td>
                                <td className="text-indigo text-nowrap">
                                  {height}-{extrinsicIndex}
                                </td>

                                <td className="font-weight-bolder">
                                  <TransactionValue transaction={data} />
                                </td>
                                <td className="text-indigo">
                                  <Link to={`/account/${extrinsic.signer}`}>
                                    <ShortHex hex={extrinsic.signer} />
                                  </Link>
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
          </div>
        </div>
      </div>
    );
  }
}
