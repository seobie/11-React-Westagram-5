import React, { Component } from "react";
import Suggestion from "./Suggestion";
import "../../../../Styles/reset.scss";
import "../../../../Styles/common.scss";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    return (
      <div className="MainRight">
        <div className="divForSticky">
          <div className="userInfo">
            <div className="userInfoContainer">
              <div className="userInfoPhoto">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/30078382_606077686407278_6559547588033380352_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ypevyUSIvrMAX9PhSwQ&oh=8a6fe8c60581cf85f4338bd49fd0edbb&oe=5F48841A"
                  alt="user's profile pictures"
                />
              </div>
              <div className="userIdAndName">
                <div className="userId">
                  <a href="/">user_id_here</a>
                </div>
                <div className="userName">user_name_here</div>
              </div>
            </div>
          </div>
          <div className="suggestionHeader">
            <div className="suggestions">Suggestions For You</div>
            <div className="suggestionSeeAll">
              <a href="/">See All</a>
            </div>
          </div>
          <div className="suggestionList">
            <ul>
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
            </ul>
          </div>
          <div className="sideFooter">
            <nav className="sideNavBar">
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Help</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">API</a>
                </li>
                <li>
                  <a href="/">Jobs</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
                <li>
                  <a href="/">Locations</a>
                </li>
                <li>
                  <a href="/">Top Accounts</a>
                </li>
                <li>
                  <a href="/">Hashtags</a>
                </li>
                <li>
                  <a href="/">Language</a>
                </li>
              </ul>
              <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRight;
