import { useState } from "react";

import "./App.css";
import { data } from "./data.js";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container mt-5">
        <h4 className="text-primary">Filter Table Data</h4>
        <form className="col-md-6">
          <input
            type="text"
            placeholder="search text"
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>

        <table className="table table-bordered table-striped mt-3">
          <thead>
            <tr>
              <th>S.no</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item, index) => {
                return search === ""
                  ? item
                  : item.first_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                      item.last_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.email.toLowerCase().includes(search.toLowerCase()) ||
                      item.phone.includes(search);
              })
              .map((item, index) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
