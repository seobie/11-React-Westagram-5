import React, { Component } from "react";
import CommentItem from "./CommentItem";
import "./Feed.scss";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      commentArray: [],
      clicked: false,
    };
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleEnter = (e) => {
    if (e.key === "Enter" && this.state.comment.length > 1) {
      this.appendListItem();
    }
  };

  appendListItem = () => {
    const { commentArray, comment } = this.state;
    commentArray.push({ cmt: comment });
    this.setState({
      commentArray,
      comment: "",
    });
  };

  clickLike = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const {
      author,
      authorPic,
      location,
      feedImg,
      details,
      friendName,
      likedNum,
      numComments,
      passedTime,
    } = this.props.feedObj;

    const { clicked, commentArray, comment } = this.state;
    const { clickLike, appendListItem, handleEnter, handleChange } = this;
    return (
      <article className="Feed">
        <header className="uploader">
          <div className="headerProfilePic">
            <img alt={`${author}'s profile picture`} src={authorPic} />
          </div>
          <div className="headerUserName">
            <div>
              {author}
              <span>{location}</span>
            </div>
            <button className="moreBtn">
              <div className="moreBtnDiv">
                <svg
                  aria-label="More options"
                  fill="#262626"
                  height="16"
                  viewBox="0 0 48 48"
                  width="16"
                >
                  <circle
                    clipRule="evenodd"
                    cx="8"
                    cy="24"
                    fillRule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clipRule="evenodd"
                    cx="24"
                    cy="24"
                    fillRule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clipRule="evenodd"
                    cx="40"
                    cy="24"
                    fillRule="evenodd"
                    r="4.5"
                  ></circle>
                </svg>
              </div>
            </button>
          </div>
        </header>
        <div className="contents">
          <img alt={`${author}'s feed`} src={feedImg} />
        </div>
        <div className="contentsBottomContainer">
          <div className="icons">
            <span className="likeBtn" onClick={clickLike}>
              <button>
                <div>
                  <span className="likeBtnSpan"></span>
                  <svg
                    aria-label="Like"
                    className={clicked ? "likeBtnRed" : "likeBtnBlack"}
                    fill={clicked ? "#ed4956" : "#262626"}
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      d={
                        clicked
                          ? "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                          : "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                      }
                    ></path>
                  </svg>
                </div>
              </button>
            </span>
            <span className="commentBtn">
              <button>
                <div>
                  <svg
                    aria-label="Comment"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </span>
            <span className="shareBtn">
              <button>
                <div>
                  <svg
                    aria-label="Share Post"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
              </button>
            </span>
            <span className="saveBtn">
              <svg
                aria-label="Save"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>
            </span>
          </div>
          <div className="likes">
            <div className="friendsPhoto"></div>
            <div>
              {`Liked by `}
              <span>
                <a className="userNameATags" href="/">
                  {friendName}
                </a>
              </span>
              {` and`}
              <button className="othersBtn">{`${likedNum} others`}</button>
            </div>
          </div>
          <div className="description">
            <div className="descriptionUserName">
              <a className="userNameATags" href="/">
                {author}
              </a>
            </div>
            &nbsp;
            <div className="descriptionDetails">{details}</div>
            <span className="moreDots">
              ...&nbsp;
              <button className="descriptionMore">more</button>
            </span>
          </div>
          <div className="comments">
            <div className="viewAllComments">
              <a href="/">
                {`View All `}
                <span className="numOfAllComments">{numComments}</span>
                {` comments`}
              </a>
            </div>
            <ul className="commentList">
              {commentArray.map((el, idx) => (
                <CommentItem key={idx} valueFromFeed={el.cmt} />
              ))}
            </ul>
          </div>
          <div className="passedTime">
            <a href="/">{`${passedTime} hours ago`}</a>
          </div>
          <section className="commentInput">
            <div>
              <textarea
                className="commentTextArea"
                placeholder="Add a comment..."
                style={{ height: "18px" }}
                onChange={handleChange}
                onKeyUp={handleEnter}
                value={comment}
              ></textarea>
              <button
                className={comment ? "commentPostBtnActive" : "commentPostBtn"}
                disabled={comment ? false : true}
                onClick={appendListItem}
              >
                Post
              </button>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default Feed;
