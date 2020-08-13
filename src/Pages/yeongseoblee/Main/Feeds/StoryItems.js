import React, { Component } from "react";

class StoryItems extends Component {
  render() {
    const { id, src } = this.props.storyObj;
    return (
      <li>
        <div className="storyItems">
          <div className="unreadStory">
            <button className="storyBtn">
              <img alt={`${id}'s profile picture`} src={src} />
            </button>
            <div className="storyId">{id}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default StoryItems;
