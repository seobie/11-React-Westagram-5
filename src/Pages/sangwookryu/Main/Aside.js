import React from "react";
import "./Aside.scss";

function Aside() {
  return (
    <section class="main-box">
      <aside class="aside-box">
        <div class="aside-head">
          <div class="profile">
            <img
              class="profile-icon"
              alt="profile icon"
              src="./images/sangwookryu/Olga_Scheps_piano_4.png"
            />
            <div class="user-id">Olga Scheps</div>
          </div>
        </div>
        <div class="aside-contents">
          <ul class="recommend">
            <li>
              <div class="user-profile">
                <img
                  class="profile-icon"
                  alt="profile icon"
                  src="./images/sangwookryu/sideprofile1.gif"
                />
                <div class="profile-side">
                  <div class="profile-id">Henri Matisse</div>
                  <p>회원님을 위한 추천</p>
                </div>
                <div class="btn-follow">팔로우</div>
              </div>
            </li>
            <li>
              <div class="user-profile">
                <img
                  class="profile-icon"
                  alt="profile icon"
                  src="./images/sangwookryu/sideprofile2.png"
                />
                <div class="profile-side">
                  <div class="profile-id">Silksong</div>
                  <p>회원님을 위한 추천</p>
                </div>
                <div class="btn-follow">팔로우</div>
              </div>
            </li>
            <li>
              <div class="user-profile">
                <img
                  class="profile-icon"
                  alt="profile icon"
                  src="./images/sangwookryu/sideprofile3.jpg"
                />
                <div class="profile-side">
                  <div class="profile-id">Schubert</div>
                  <p>회원님을 위한 추천</p>
                </div>
                <div class="btn-follow">팔로우</div>
              </div>
            </li>
            <li>
              <div class="user-profile">
                <img
                  class="profile-icon"
                  alt="profile icon"
                  src="./images/sangwookryu/sideprofile4.png"
                />
                <div class="profile-side">
                  <div class="profile-id">Gucci</div>
                  <p>회원님을 위한 추천</p>
                </div>
                <div class="btn-follow">팔로우</div>
              </div>
            </li>
            <li>
              <div class="user-profile">
                <img
                  class="profile-icon"
                  alt="profile icon"
                  src="./images/sangwookryu/sideprofile5.png"
                />
                <div class="profile-side">
                  <div class="profile-id">GitHub</div>
                  <p>회원님을 위한 추천</p>
                </div>
                <div class="btn-follow">팔로우</div>
              </div>
            </li>
          </ul>
        </div>
        <footer class="aside-footer">
          <ul class="info">
            <li>소개</li>
            <li> · </li>
            <li>도움말</li>
            <li> · </li>
            <li>홍보 센터</li>
            <li> · </li>
            <li>API</li>
            <li> · </li>
            <li>채용 정보</li>
            <li> · </li>
            <li>개인정보처리방침</li>
            <li> · </li>
            <li>약관</li>
            <li> · </li>
            <li>위치</li>
            <li> · </li>
            <li>인기 계정</li>
            <li> · </li>
            <li>해시태그</li>
            <li> · </li>
            <li>언어</li>
          </ul>
          <div class="copyright">© 2020 INSTAGRAM FROM FACEBOOK</div>
        </footer>
      </aside>
    </section>
  );
}

export default Aside;
