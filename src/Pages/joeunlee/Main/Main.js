import React from "react";
import NavBar from "../../../Components/Nav/Nav";
import Feeds from "./Components/Feeds/Feeds";
import "./Main.scss";

class MainJoEun extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Feeds />
      </>
    );
  }
}

export default MainJoEun;
