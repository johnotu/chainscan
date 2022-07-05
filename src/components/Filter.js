import { useState } from "react";
import eventTypes from "../data/event-types.json";

export default function Filter({ params, setSearchParams, isTransactions }) {
  const [section, setSection] = useState(params.section);
  const [method, setMethod] = useState(params.method);
  const [prevParams, setPrevParams] = useState(null);

  if (params !== prevParams) {
    setSection(params.section);
    setMethod(params.method);
    setPrevParams(params);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ section, method });
  };

  return (
    <div className="section-block">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-inline col-md-4 mb-3 mt-3">
                <label htmlFor="module" className="mr-3 font-weight-bold">
                  Module
                </label>
                {isTransactions ? (
                  <span>balances</span>
                ) : (
                  <select
                    className="custom-select"
                    id="module"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                  >
                    <option value="">all</option>
                    {eventTypes.map((type) => (
                      <option value={type.selection} key={type.section}>
                        {type.section}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="form-inline col-md-4 mb-3 mt-3">
                <label htmlFor="event" className="mr-3 font-weight-bolder">
                  Event
                </label>
                <select
                  className="custom-select"
                  id="event"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                >
                  <option value="">all</option>
                  {section &&
                    eventTypes
                      .find((type) => type.section === section)
                      .methods.map((method) => (
                        <option value={method} key={method}>
                          {method}
                        </option>
                      ))}
                </select>
              </div>
              <div className="form-inline col-md-4 mb-3 mt-3 d-flex justify-content-end">
                <button className="btn btn-outline-dark" type="submit">
                  Filter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
