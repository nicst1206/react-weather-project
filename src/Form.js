import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="searchInput"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="searchButton" />
          </div>
        </div>
      </form>
    </div>
  );
}
