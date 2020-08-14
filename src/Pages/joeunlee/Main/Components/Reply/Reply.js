import React from "react";
import "./Reply.scss";

class Reply extends React.Component {
  render() {
    return (
      <li className="reply">
        <a href="/">jjo_nii_</a>
        <span>{this.props.reply.newReply}</span>
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="heart"
        />
      </li>
    );
  }
}

export default Reply;
