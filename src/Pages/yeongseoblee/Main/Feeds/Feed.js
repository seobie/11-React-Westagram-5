import React, { Component } from "react";
import CommentItem from "./CommentItem";
import "../../../../Styles/reset.scss";
import "../../../../Styles/common.scss";
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

  handleTest = (data) => {
    console.log(data);
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value }, () => {
      console.log(this.state.comment);
    });
  };

  handleEnter = (e) => {
    if (e.key === "Enter" && this.state.comment.length > 1) {
      this.appendListItem();
    }
  };

  appendListItem = () => {
    let arr = this.state.commentArray;
    arr.push({ cmt: this.state.comment });
    this.setState({
      commentArray: arr,
      comment: "",
    });
    this.ref.value = "";
  };

  clickLike = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <article className="Feed">
        <header className="uploader">
          <div className="headerProfilePic">
            <img
              alt="joeyunlee's profile picture"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/61039677_325768861657657_664942833857200128_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=8yxlPFRdtTwAX-vW7vC&oh=c1e6cecaa984ed33654acbf9da987329&oe=5F4FB426"
            />
          </div>
          <div className="headerUserName">
            <div>
              joeyunlee
              <span>somewhere cool</span>
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
          <img
            alt="user_name's feed"
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/75491419_2590257414631838_8252980959796004155_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=B4Pxemwn7_MAX97vKyj&oh=1b2545719f2050ab13d683bedcdcf5eb&oe=5F4E85F1"
          />
        </div>
        <div className="contentsBottomContainer">
          <div className="icons">
            <span className="likeBtn" onClick={this.clickLike}>
              <button>
                <div>
                  <span className="likeBtnSpan"></span>
                  <svg
                    aria-label="Like"
                    className="likeBtnBlack"
                    fill={this.state.clicked ? "#ed4956" : "#262626"}
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      d={
                        this.state.clicked
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
              Liked by
              <span>
                <a className="userNameATags" href="/">
                  User's Friend Name Here
                </a>
              </span>
              and
              <button className="othersBtn">9,999 others</button>
            </div>
          </div>
          <div className="description">
            <div className="descriptionUserName">
              <a className="userNameATags" href="/">
                user_name
              </a>
            </div>
            &nbsp;
            <div className="descriptionDetails">details</div>
            <span className="moreDots">
              ...&nbsp;
              <button className="descriptionMore">more</button>
            </span>
          </div>
          <div className="comments">
            <div className="viewAllComments">
              <a href="/">
                View All
                <span className="numOfAllComments">9,999,999</span>
                comments
              </a>
            </div>
            <ul className="commentList">
              <li className="commentListItems">
                <div className="nameAndComment">
                  <div className="commentNames">
                    <a className="userNameATags" href="/">
                      other_user1
                    </a>
                  </div>
                  &nbsp;
                  <div className="commentContents">
                    other_user1's comment_contents
                  </div>
                </div>
                <span className="commentLikes">
                  <button>
                    <span>
                      <svg
                        aria-label="Like"
                        className="commentLikeBtnBlack"
                        fill="#262626"
                        height="12"
                        viewBox="0 0 48 48"
                        width="12"
                      >
                        <path
                          className="commentLikeBtnPath"
                          d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </li>
              <li className="commentListItems">
                <div className="nameAndComment">
                  <div className="commentNames">
                    <a className="userNameATags" href="/">
                      other_user2
                    </a>
                  </div>
                  &nbsp;
                  <div className="commentContents">
                    other_user2's comment_contents
                  </div>
                </div>
                <span className="commentLikes">
                  <button>
                    <div>
                      <svg
                        aria-label="Like"
                        className="commentLikeBtnBlack"
                        fill="#262626"
                        height="12"
                        viewBox="0 0 48 48"
                        width="12"
                      >
                        <path
                          className="commentLikeBtnPath"
                          d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </li>
              <li className="commentListItems">
                <div className="nameAndComment">
                  <div className="commentNames">
                    <a className="userNameATags" href="/">
                      other_user3
                    </a>
                  </div>
                  &nbsp;
                  <div className="commentContents">
                    other_user3's comment_contents
                  </div>
                </div>
                <span className="commentLikes">
                  <button>
                    <div>
                      <svg
                        aria-label="Like"
                        className="commentLikeBtnBlack"
                        fill="#262626"
                        height="12"
                        viewBox="0 0 48 48"
                        width="12"
                      >
                        <path
                          className="commentLikeBtnPath"
                          d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </li>
              <li className="commentListItems">
                <div className="nameAndComment">
                  <div className="commentNames">
                    <a className="userNameATags" href="/">
                      other_user4
                    </a>
                  </div>
                  &nbsp;
                  <div className="commentContents">
                    other_user4's comment_contents
                  </div>
                </div>
                <span className="commentLikes">
                  <button>
                    <div>
                      <svg
                        aria-label="Like"
                        className="commentLikeBtnBlack"
                        fill="#262626"
                        height="12"
                        viewBox="0 0 48 48"
                        width="12"
                      >
                        <path
                          className="commentLikeBtnPath"
                          d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </li>
              {this.state.commentArray.map((el) => (
                <CommentItem valueFromFeed={el.cmt} />
              ))}
            </ul>
          </div>
          <div className="passedTime">
            <a href="/">20 hours ago</a>
          </div>
          <section className="commentInput">
            <div>
              <textarea
                ref={(ref) => (this.ref = ref)}
                className="commentTextArea"
                placeholder="Add a comment..."
                style={{ height: "18px" }}
                onChange={this.handleChange}
                onKeyUp={this.handleEnter}
                value={this.state.comment}
              ></textarea>
              <button
                className={
                  this.state.comment ? "commentPostBtnActive" : "comemntPostBtn"
                }
                disabled={this.state.comment ? false : true}
                onClick={this.appendListItem}
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
