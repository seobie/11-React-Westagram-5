import React from "react";
import Comment from "./Comment"
import "./Article.scss";


class Article extends React.Component {
  constructor() {
    super();

    this.state = {
      commentValue: "",
      arr: [],
    };
  }

  handleCommentEvent = (e) => {
    this.setState({ commentValue: e.target.value });
  };

  addComment = () => {
    this.setState({
      arr: [...this.state.arr, this.state.commentValue],
      commentValue: "",
    });
  };

  addCommentEnter = (e) => {
    if (e.key === "Enter" && this.state.commentValue.length > 0) {
      this.setState({
        arr: [...this.state.arr, this.state.commentValue],
        commentValue: "",
      });
    }
  };

  render() {
    const enabled = this.state.commentValue.length > 0;
    return (
      <>
        <section className="main-box">
          <article className="article-box">
            <header className="article-head">
              <div className="profile">
                <img
                  className="profile-icon"
                  alt="profile icon"
                  src="./images/sangwookryu/Olga_Scheps_piano_4.png"
                />
                <div className="user-id">Olga Scheps</div>
              </div>
              <img
                className="btn-option"
                alt="more option"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </header>
            <div className="article-photo">
              <img alt="photo" src="/images/sangwookryu/summer.jpg" />
            </div>
            <div className="article-btn">
              <img
                alt="heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="comment"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img
                alt="share"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              />
              <img
                className="btn-bookmark"
                alt="bookmark"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
              />
            </div>
            <div className="content-box">
              <div className="contents">
                <div className="likes-info">
                  좋아요&nbsp;<span className="likescount">1913개</span>
                </div>
                <div className="comment-box">
                  <div className="writer-id">Olga Scheps</div>&nbsp;Hello summer
                  ☺🌻💙
                  <a href="">#sun</a> <a href="">#portrait</a>
                  <ul className="viewer-box">
                    {this.state.arr.map((comment, index) => {
                      return (
                        <Comment commentqq={comment}/>
                      );
                    })}
                  </ul>
                </div>
                <div className="post-time">5일 전</div>
              </div>
              <div className="add-comment-box">
                <input
                  type="text"
                  className="write-comment"
                  placeholder="댓글 달기...."
                  onChange={this.handleCommentEvent}
                  onKeyPress={this.addCommentEnter}
                  name="commentValue"
                  value={this.state.commentValue}
                ></input>
                <button
                  className="add-comment"
                  onClick={this.addComment}
                  name="commentBtn"
                  disabled={!enabled}
                >
                  게시
                </button>
              </div>
            </div>
          </article>
        </section>
        <script src="js/main.js"></script>
      </>
    );
  }
}

export default Article;
