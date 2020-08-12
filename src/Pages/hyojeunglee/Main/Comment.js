import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="mainText">
        <li className="nameBold">ovovv</li>
        <li>{this.props.commentData.commentValue}</li>
        <li className="likeBtn">
          <img ait="commentLike" src="/images/hyojeunglee/icon5_fom.png" />
        </li>
      </div>
    );
  }
}

export default Comment;
