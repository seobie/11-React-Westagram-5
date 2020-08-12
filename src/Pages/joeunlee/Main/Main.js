import React from "react";
import "./Main.scss"
import "../../../Styles/common.scss"
import "../../../Styles/reset.scss"
import NavBar from "../../../Components/Nav/Nav"
import Feeds from "./Components/Feeds/Feeds"

class MainJoEun extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <Feeds />
      </div>
    );
  }
}

export default MainJoEun;