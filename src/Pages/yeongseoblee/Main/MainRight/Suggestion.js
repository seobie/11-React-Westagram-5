import React, { Component } from "react";
import "../../../../Styles/reset.scss";
import "../../../../Styles/common.scss";
import "./Suggestion.scss";

class Suggestion extends Component {
  render() {
    return (
      <li className="Suggestion">
        <div className="suggestedUserPhoto">
          <img
            className="suggestedUserThumbnail"
            src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=F5b1RhRE1tkAX-o2ELT&oh=f5bb1cd40008d5abe1bb183fcfa92556&oe=5F4B0B8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
            alt="suggested user's profile picture"
          />
        </div>
        <div className="suggestedUserIdAndInfo">
          <div className="suggestedUserId">suggested user's ID</div>
          <div className="suggestedUserInfo">Follws you</div>
        </div>
        <div className="followSuggestions">
          <button>Follow</button>
        </div>
      </li>
    );
  }
}

export default Suggestion;
