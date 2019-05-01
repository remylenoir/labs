import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import countries from "../countries";

export default class CountryList extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
          <div className="list-group">
            {countries.map((el, i) => {
              return (
                <Link key={i} to={`/${el.cca3}`} className="list-group-item list-group-item-action">
                  {el.flag} {el.name.common}
                </Link>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
