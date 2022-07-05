import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (e) => setSearchTerm(e.target.value);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/block/${searchTerm}`);
  };

  return (
    <div className="section-block">
      <div className="card">
        <div className="card-body">
          <form onSubmit={submitSearch}>
            <div className="input-group input-group-alt">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="oi oi-magnifying-glass"></span>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by block height or hash"
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
