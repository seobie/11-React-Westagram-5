import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Article from './Article';
import Aside from './Aside';
import "./Main.scss";


class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Main">
          <Article />
          <Aside />
        </div>
      </>
    );
  }
}

export default Main;
