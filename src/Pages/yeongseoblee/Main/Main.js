import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Feeds from "./Feeds/Feeds";
import MainRight from "./MainRight/MainRight";

import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <main>
          <Feeds />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
