import React from "react";
import "./Feeds.scss"
import "../../../../../Styles/common.scss"
import "../../../../../Styles/reset.scss"
import Reply from "../Reply/Reply"

class Feeds extends React.Component {
	constructor() {
    super()
    this.state = {
			txtVal: "",
			newArr: [],
			newReply: "",
		}
	}
	checkTxt = (e) => {
		this.setState({
			txtVal: e.target.value
		});
	}
	replyBtn = (e) => {
		this.setState({
			newArr: this.state.newArr.concat({
				newReply: this.state.txtVal,
			}),
			txtVal: ""
		})
	}
	enterPress = (e) => {
		if(e.key==="Enter") {
			this.replyBtn();
		}
	}
	
	render() {
    return (
      <main className="Feeds">
		    <div className="feedsInnerContainer">
			    <div className="feedsStoryBox">
				    <ul className="feedsStoryList">
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/IMG_5186.JPG" alt="mommy's profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">mommy</div>
						    </a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/weocde.jpeg" alt="wecode's profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">wecode</div>
						    </a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/kim.jpg" alt="glory_K's profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">glory_K</div>
						    </a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/IMG_3607.JPG" alt="jjo_nii_'s profile pic" />
						    </a>
						    <a href=""><div className="feedsStoryListId">jjo_nii_</div></a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/king.jpg" alt="camellia's profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">camellia</div>
						    </a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/jenny.jpg" alt="jenny.blackk's profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">jenny.blackk</div>
						    </a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/gd.jpg" alt="g-dragon's profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">g-dragon</div>
						    </a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/dua.jpg" alt="dua_lipa_'s profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">dua_lipa_</div>
						    </a>
					    </li>
					    <li className="feedsStoryListIdBox">
						    <a href="">
							    <img src="images/joeunlee/wook.png" alt="actor_wook's profile pic" />
						    </a>
						    <a href="">
							    <div className="feedsStoryListId">actor_wook</div>
						    </a>
					    </li>
				    </ul>
			    </div>
			    <article className="feedsContents">
				    <header className="feedsTop">
					    <div className="feedsTopLeft">
						    <a href="">
							    <img src="images/joeunlee/IMG_3607.JPG" alt="jjo_nii_'s profile pic" />
						    </a>
						    <div className="feedsTopLeftMargin">
							    <div>
								    <a href="">jjo_nii_</a>
							    </div>
							    <div className="feedsTopLocation">
								    <a href="">L'oro di Napoli Ealing</a>
							    </div>
						    </div>
					    </div>
					    <div>
						    <div className="feedsTopDots">
							    <button>
								    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="dots" />
							    </button>
						    </div>
					    </div>
				    </header>
				    <img src="images/joeunlee/IMG_8548.jpg" alt="pizza" />
				    <div className="replySection">
					    <div className="replyIconBar">
						    <div className="replyIconLeft">
							    <a href="">
								    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
							    </a>
							    <a href="">
								    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="comment" />
							    </a>
							    <a href="">
								    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="share" />
							    </a>
						    </div>
						    <div className="replyIconRight">
							    <a href="">
								    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="bookmark" />
							    </a>
						    </div>
					    </div>	
					    <section className="replyLikes">
						    <a href="">
							    <img src="images/joeunlee/weocde.jpeg" alt="wecode's profile pic" />
						    </a>
						    <div className="replyLikesContents">
							    <span>
								    <a href="">wecode</a>
							    </span>님
							    <button>외
							    <span> 71</span>명
									</button>이 좋아합니다.
						    </div>
					    </section>
					    <section className="replyListBox">
						    <div className="replyContents">
							    <a href="">jjo_nii_</a><span>world's best</span>
						    </div>
						    <div className="replyNumber">
							    <a href="">댓글 <span>8</span>개 모두 보기</a>
						    </div>
						    <ul>
									{this.state.newArr.map((el,idx)=>{
										return <Reply el={el} key={idx}/>
									})}
								</ul>
					    </section>
					    <div className="replyTime">
						    <time>8시간 전</time>
					    </div>
					    <section className="replyTypeBox">
								<form 
								  className="replyTypeLine"
									>
									<textarea
										placeholder="댓글 달기..."
										value={this.state.txtVal}
										onChange={this.checkTxt}
										onKeyPress={this.enterPress}
								    >
								  </textarea>
								  <button
									  className={`replyBtn${this.state.txtVal? "Active" : "Disabled"}`}
									  disabled={this.state.txtVal? false : true}
										onClick={this.replyBtn}
								    >
										  게시
								  </button>
								</form>
					    </section>
				    </div>
			    </article>
		    </div>
	      <div className="mainRight">
		      <div className="mainRightTop">
			      <img src="images/joeunlee/IMG_3607.JPG" alt="jjo_nii_'s profile pic" />
			      <div className="mainRightTopId">
				      <div className="mainRightName">
						    <a href="">jjo_nii_</a>
					    </div>
				      <div className="mainRightNick">조파리</div>
			      </div>
		      </div>
		      <div className="recommendContainer">
			      <div className="recommendTop">
				      <div className="recommendTopRight">회원님을 위한 추천</div>
				      <a href="">모두 보기</a>
			      </div>
			      <div className="recommendListBox">
				      <div className="recommendList">
					      <div className="recommendListRight">
						      <img src="images/joeunlee/ha.jpg" alt="jeongwoo_haha's profile pic" />
						      <div className="recommendListName">
							      <a href="">jeongwoo_haha</a>
							      <div className="recommendListInfo">회원님을 위한 추천</div>
						      </div>
					      </div>
					      <button>팔로우</button>
				      </div>
				      <div className="recommendList">
					      <div className="recommendListRight">
						      <img src="images/joeunlee/yun.jpg" alt="god_yun's profile pic" />
						      <div className="recommendListName">
							      <a href="">god_yun</a>
							      <div className="recommendListInfo">회원님을 위한 추천</div>
						      </div>
					      </div>
					      <button>팔로우</button>
				      </div>
				      <div className="recommendList">
					      <div className="recommendListRight">
						      <img src="images/joeunlee/zico.jpg" alt="zzzzzziaco's profile pic" />
						      <div className="recommendListName">
							      <a href="">zzzzzziaco</a>
							      <div className="recommendListInfo">회원님을 위한 추천</div>
						      </div>
					      </div>
					      <button>팔로우</button>
				      </div>
				      <div className="recommendList">
					      <div className="recommendListRight">
						      <img src="images/joeunlee/park.jpg" alt="seojun.park's profile pic" />
						      <div className="recommendListName">
							      <a href="">seojun.park</a>
							      <div className="recommendListInfo">instagram 신규 가입</div>
						      </div>
					      </div>
					      <button>팔로우</button>
				      </div>
			      </div>
			      <div className="extraInfo">
				      <ul>
					      <li>
						      <a href="">소개</a>
					      </li>
					      <li>
						      <a href="">도움말</a>
					      </li>
					      <li>
						      <a href="">홍보센터</a>
					      </li>
					      <li>
						      <a href="">API</a>
					      </li>
					      <li>
						      <a href="">채용 정보</a>
					      </li>
					      <li>
						      <a href="">개인정보처리방침</a>
					      </li>
					      <li>
						      <a href="">약관</a>
					      </li>
					      <li>
						      <a href="">위치</a>
					      </li>
					      <li>
						      <a href="">인기계정</a>
					      </li>
					      <li>
						      <a href="">해시태그</a>
					      </li>
					      <li>
						      <a href="">언어</a>
					      </li>
				      </ul>
				      <span>Ⓒ2020 INSTAGRAM FROM WECODE.JOEUN LEE</span>
			      </div>
			    </div>
	      </div>
      </main>
    );
  }
}

export default Feeds;