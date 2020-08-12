import React from "react";
import "./Main.scss";
import NavBar from "../../../Components/Nav/Nav";
import Article from "./Article";
import Aside from "./Aside";

class Main extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Article />
        <Aside />
      </>
    );
  }
}

export default Main;
