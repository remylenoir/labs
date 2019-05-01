import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

export default class Country extends Component {
  render() {
    return (
      <div className="list-group">
        {countries.map((el, i) => {
          return (
            <Link key={i} to={`/${el.cca3}`} className="list-group-item list-group-item-action">
              {el.flag} {el.name.common}
            </Link>
          );
        })}
      </div>
    );
  }
}
