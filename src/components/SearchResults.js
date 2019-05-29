import React from "react";

const SearchResults = ({ showResults, search }) => (
  <div className="search-results-container" hidden={!showResults}>
    <p>{search}</p>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">DOB</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>1/1/2000</td>
          <td>mark.otto@gmail.com</td>
          <td>216-555-1234</td>
        </tr>
        <tr>
          <td>Jim</td>
          <td>Nance</td>
          <td>1/1/2000</td>
          <td>mark.otto@gmail.com</td>
          <td>216-555-1234</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>1/1/2000</td>
          <td>mark.otto@gmail.com</td>
          <td>216-555-1234</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>1/1/2000</td>
          <td>mark.otto@gmail.com</td>
          <td>216-555-1234</td>
        </tr>
      </tbody>
    </table>

    <nav>
      <ul className="pagination pagination-sm">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default SearchResults;
