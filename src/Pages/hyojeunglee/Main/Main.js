import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Article from "./Article";
import Aside from "./Aside";
import "../../../Styles/common.scss";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <div className="mainBox">
          <Article />
          <Aside />
        </div>
      </div>
    );
  }
}

export default Main;
