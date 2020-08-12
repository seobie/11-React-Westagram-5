import React, { Component } from 'react';
import './Comment.scss';


class Comment extends Component {
    render() {
        return (
            <div>
                <span>  {this.props.valueFromParent}</span>
                <span> <img className="iconHeartSmall" alt="하트아이콘"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" /></span>

            </div>
        );
    }
}
export default Comment; 