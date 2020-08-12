import React, { Component } from "react";
import "./Main.scss";
import "./Aside.scss";

class Aside extends Component {
  render() {
    return (
      <aside className="Aside">
        <div className="profile">
          <div className="profileImg"></div>
          <ul className="profileText">
            <li className="profileId">ovv__0703</li>
            <li className="profileName">ㅎㅈ</li>
          </ul>
        </div>
        <div className="storyBox">
          <ul className="storyBoxTop">
            <li className="storyBoxTitle">스토리</li>
            <li>모두 보기</li>
          </ul>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">s_yeong_ee</li>
              <li className="profileTime">16분 전</li>
            </ul>
          </div>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">epelcuration</li>
              <li className="profileTime">3시간 전</li>
            </ul>
          </div>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">luckysukyw</li>
              <li className="profileTime">20시간 전</li>
            </ul>
          </div>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">_seul.ki</li>
              <li className="profileTime">36시간 전</li>
            </ul>
          </div>
        </div>
        <div className="issueBox">
          <ul className="issueBoxTop">
            <li className="issueBoxTitle">회원님을 위한 추천</li>
            <li>모두 보기</li>
          </ul>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">s_yeong_ee</li>
              <li className="followText">curationd외 2명이 알고있습니다.</li>
            </ul>
            <div className="follow">팔로우</div>
          </div>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">epelcuration</li>
              <li className="followText">ckysud님 외 4명이 알고있습니다.</li>
            </ul>
            <div className="follow">팔로우</div>
          </div>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">luckysukyw</li>
              <li className="followText">luc님 외 4명이 알고있습니다.</li>
            </ul>
            <div className="follow">팔로우</div>
          </div>
          <div className="profile2">
            <div className="profileImg2"></div>
            <ul className="profileText2">
              <li className="profileId2">_seul.ki</li>
              <li className="followText">seul___님 외 4명이 알고있습니다.</li>
            </ul>
            <div className="follow">팔로우</div>
          </div>
        </div>
        <div className="footerBox">
          <ul>
            <li>Instagram 정보</li>
            <li>지원</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>디렉터리</li>
            <li>프로필</li>
            <li>해시태그</li>
            <li>언어</li>
          </ul>
          <span>ⓒ 2019 INSTAGRAM</span>
        </div>
      </aside>
    );
  }
}

export default Aside;
