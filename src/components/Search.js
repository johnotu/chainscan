import { useState } from "react";

export default function Search() {
  const [searchParam, setSearchParam] = useState("Height");
  const changeSearchParam = (e) => setSearchParam(e.target.value);
  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (e) => setSearchTerm(e.target.value);

  const submitSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className="section-block">
      <div className="card">
        <div className="card-body">
          <form onSubmit={submitSearch}>
            <div className="input-group input-group-alt">
              <div className="input-group-prepend">
                <select
                  className="custom-select"
                  value={searchParam}
                  onChange={changeSearchParam}
                >
                  <option value="Height">Block Height </option>
                  <option value="Hash">Block Hash </option>
                </select>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="oi oi-magnifying-glass"></span>
                  </span>
                </div>
                <input
                  type={searchParam === "Height" ? "number" : "text"}
                  className="form-control"
                  placeholder={`Search by Block ${searchParam}`}
                  onChange={changeSearchTerm}
                />
              </div>

              <div className="input-group-append">
                <button className="btn btn-dark" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
