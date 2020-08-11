import React, { Component } from "react";
import "../../../../Styles/reset.scss";
import "../../../../Styles/common.scss";
import Story from "./Story";
import Feed from "./Feed";
import "./Feeds.scss";

class Feeds extends Component {
  render() {
    return (
      <div className="Feeds">
        <Story />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    );
  }
}

export default Feeds;
