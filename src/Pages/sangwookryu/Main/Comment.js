import React, { Component } from "react";

class comment extends Component {
  render() {
    return (
      <div>
        <li className="viewer-id">SangWook</li>
        <li className="viewer-comment">{this.props.commentqq}</li>
      </div>
    );
  }
}

export default comment;