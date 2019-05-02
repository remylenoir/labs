import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountryList />
            <Route path="/:cca3" component={CountryDetail} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
