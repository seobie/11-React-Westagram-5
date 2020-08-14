import React from "react";
import NavBar from "../../../Components/Nav/Nav";
import Article from "./Article";
import Aside from "./Aside";
import "./Main.scss";

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
