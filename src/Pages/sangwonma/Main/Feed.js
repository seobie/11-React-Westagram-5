import React, { Component } from 'react';
import Comment from './Comment';
import './Feed.scss';

class Feed extends Component {
    constructor() {
        super()
        this.state = {
            id: "ssamwonn",
            message: "",
            lists: [],
            text: ""
        };
    }
    onChangeInput = (e) => {
        this.setState({ message: e.target.value })
    }
    addComment = (e) => {
        e.preventDefault();
        this.setState({
            lists: this.state.lists.concat(`${this.state.id} ${' '} ${this.state.message}`),
            message: ""
        });
    }

    render() {
        return (
            <div className="feedContainer">
                <div className="feedHeader">
                    <img alt="메인프로필사진"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94017159_2562777257321639_4649294732051087360_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=T--_xBwRsvsAX-IcQ_k&oh=ea8dc8576846917c809ee4f0d25f85e5&oe=5F4DA71B" />
                    <div className="innerImg">#</div>
                    <div className="innerImgText">#영감사진</div>
                    <div className="innerImgText">ssamwonn</div>
                    <div className="innerLocation">서울어딘가</div>
                </div>
                <div className="feedImgBox">
                    <img alt="메인피드이미지" src="https://images.squarespace-cdn.com/content/v1/593686695016e1e8535b639b/1524753684115-PXHJRGOBF9V1LHV01S5P/ke17ZwdGBToddI8pDm48kGeNtXjnSVE0FC98ofHjoQx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVURxIstYj4VcQ3u4G8psS8p19-2HRX2fy4mVTF2-S9JlPRhrjbf-ufqwsSWgrw9rg/06_8508-e1507627553782.jpg?format=2500w" />
                </div>
                <div className="commentLine">
                    <img className="iconHeart icons" alt="하트아이콘"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                    <img className="iconCommit" alt="말풍선아이콘"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                    <img className="iconsSare" alt="공유아이콘"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                    <img className="iconBookMark moveBookMark" alt="북마크아이콘"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />

                    <div className="feedLikeImg">
                        <span>좋아요 3384031개</span>
                        <div>
                            <span className="userNickName">ssamwonn</span>
                            <span> Inspiration picture</span>
                            <span >
                                <img className="iconHeartSmall" alt="하트아이콘"
                                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                            </span>
                        </div>
                    </div>
                    <div className="commentContainer">
                        <ul className="commentList">
                            <div className="passComment">
                                {this.state.lists.map((list, index) =>
                                    (<Comment key={index} valueFromParent={list} />)
                                )}
                            </div>
                        </ul>
                    </div>
                    <div className="commentsBox">
                        <form >
                            <input onChange={this.onChangeInput} value={this.state.message} className="inputComment" type="text" placeholder="댓글달기..." />
                            <button className={(this.state.message ? "submitButton" : "submitButtonChange")}
                                onClick={this.addComment}
                                value="button">게시</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Feed;

