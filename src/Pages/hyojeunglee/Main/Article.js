import React, { Component } from "react";
import Comment from "./Comment";
import "./Article.scss";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentValue: "",
      sliceText: [],
    };
  }

  textChange = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  handleCommentEvnet = () => {
    this.setState(
      {
        sliceText: this.state.sliceText.concat([
          { commentValue: this.state.commentValue },
        ]),
        commentValue: "",
      },
      console.log(this.state)
    );
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.handleCommentEvnet();
    }
  };

  render() {
    return (
      <article className="Article">
        <div className="articleTop">
          <div className="fomproImg"></div>
          <span className="forName">chyapchyap_cake</span>
          <div className="miniMenu">
            <img alt="menu" src="/images/hyojeunglee/menu_1.png" />
          </div>
        </div>
        <div className="middleImg">
          <img alt="fomimg" src="/images/hyojeunglee/fomimg.jpg" width="612" />
        </div>
        <div className="middleIcon">
          <div className="icon1">
            <img
              alt="heartImg"
              id="heartImg"
              src="/images/hyojeunglee/icon1_fom.png"
            />
          </div>
          <div className="icon1">
            <img alt="texticon" src="/images/hyojeunglee/icon2_fom.png" />
          </div>
          <div className="icon1">
            <img alt="directicon" src="/images/hyojeunglee/icon3_fom.png" />
          </div>
          <div className="icon1">
            <img alt="keepicon" src="/images/hyojeunglee/icon4_fom.png" />
          </div>
        </div>
        <div className="middleText">
          <div className="boldText">
            <div className="boldTextImg"></div>
            <b>aineworld</b>님 외 <b>10</b>명이 좋아합니다
          </div>
          <ul className="comment marginBt">
            <li className="nameBold">canon_mj</li>
            <li className="moreText">
              보틀케이크 큰사이즈2개,작은사이즈15개 나왔어요!예약판매는
              어렵습니다 선착순으로 판매할게요 현재 작업이 많아 주문케이크 상담
              답장 못 드리고 있어요 작업이 끝난 저녁쯤 순차적으로 답장 드릴게요!
            </li>
            <li className="moreBtn">더 보기</li>
            {this.state.sliceText.map((el, index) => {
              return <Comment commentData={el} key={index} />;
            })}
          </ul>
        </div>
        <span className="timeText">42분 전</span>
        <div className="bottom">
          <input
            type="text"
            className="commentInput"
            placeholder="댓글 달기...."
            value={this.state.commentValue}
            name="commentValue"
            onChange={this.textChange}
            onKeyPress={this.pressEnter}
          />
          <input
            type="button"
            className={
              this.state.commentValue.length >= 1
                ? "commentBtnEvent"
                : "commentBtn"
            }
            value="게시"
            onClick={this.handleCommentEvnet}
          />
        </div>
      </article>
    );
  }
}

export default Article;
