import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

export default class CountryDetail extends Component {
  render() {
    const cca3 = this.props.match.params.cca3;
    const country = countries.find(el => el.cca3 === cca3);

    return (
      <Fragment>
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead />
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map(cca3 => {
                      return (
                        <li key={cca3}>
                          <Link to={"/" + cca3}>
                            {countries.find(country => country.cca3 === cca3).name.common}
                          </Link>
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
