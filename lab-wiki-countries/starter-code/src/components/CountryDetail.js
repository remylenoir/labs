import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

export default class CountryDetail extends Component {
  render() {
    const cca3 = this.props.match.params.cca3;
    const found = countries.find(el => el.cca3 === cca3);

    return (
      <Fragment>
        <div className="col-7">
          <h1>{found.name.common}</h1>
          <table className="table">
            <thead />
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{found.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {found.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {found.borders.map((el, i) => {
                      return (
                        <li key={i}>
                          <Link to={el}>{el}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
