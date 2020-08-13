import React, { Component } from "react";
import Suggestion from "./Suggestion";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    const footerObj = {
      About: "https://about.instagram.com/",
      Help: "https://help.instagram.com/",
      Press: "https://about.instagram.com/blog/",
      API: "https://www.instagram.com/developer/",
      Jobs: "https://www.instagram.com/about/jobs/",
      Privacy: "https://help.instagram.com/519522125107875",
      Terms: "https://help.instagram.com/581066165581870",
      Locations: "https://www.instagram.com/explore/locations/",
      "Top Accounts": "https://www.instagram.com/directory/profiles/",
      Hashtags: "https://www.instagram.com/directory/hashtags/",
      Language: "#",
    };

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
                {Object.keys(footerObj).map((key, idx) => (
                  <li>
                    <a key={idx} href={footerObj[key]}>
                      {key}
                    </a>
                  </li>
                ))}
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
