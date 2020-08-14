import React, { Component } from "react";

class comment extends Component {
  render() {
    return (
      <>
        <li className="viewer-id">SangWook</li>
        <li className="viewer-comment">{this.props.commentqq}</li>
        <br></br>
      </>
    );
  }
}

export default comment;
