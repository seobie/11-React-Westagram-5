import React from "react";
import "./Reply.scss"
import "../../../../../Styles/common.scss"
import "../../../../../Styles/reset.scss"

class Reply extends React.Component {
  render() {
    return (
      <li className="reply">
        <a href="">seojun.park</a>
        <span>{this.props.el.newReply}</span>
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
      </li>
    );
  }
}

export default Reply;