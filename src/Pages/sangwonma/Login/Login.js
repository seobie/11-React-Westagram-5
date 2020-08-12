import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            inputId: '',
            inputPwd: '',
        };
    }
    loginId = (e) => {
        this.setState({ inputId: e.target.value })
    }
    loginPwd = (e) => {
        this.setState({ inputPwd: e.target.value })
    }

    handleClick = () => {
        fetch("http://10.58.3.218:8000/user/signin", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.inputId,
                password: this.state.inputPwd
            })
        })
            .then(res => res.json())
            .then(res => console.log(res));

    };
    goToMain = () => {
        this.props.history.push('/Main-sangwon');
    }
    render() {
        console.log(this.state.inputId)
        return (
            <section className="LoginWrapper">
                <main>
                    <article>
                        <div className="phoneImgBox">
                            <img alt="phone IMG" src="https://images.squarespace-cdn.com/content/v1/593686695016e1e8535b639b/1524753684115-PXHJRGOBF9V1LHV01S5P/ke17ZwdGBToddI8pDm48kGeNtXjnSVE0FC98ofHjoQx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVURxIstYj4VcQ3u4G8psS8p19-2HRX2fy4mVTF2-S9JlPRhrjbf-ufqwsSWgrw9rg/06_8508-e1507627553782.jpg?format=2500w" />
                        </div>
                        <div className="formArticle">
                            <div className="formBox">
                                <div className="formLogo"></div>
                                <div className="userName">
                                    <input className="inputUserName" name='inputId' onChange={this.loginId} type="text" placeholder="전화번호,사용자 이름 또는 이메일" />
                                </div>
                                <div className="passwordBox">
                                    <input className="inputPassWord" name='inputPwd' onChange={this.loginPwd} type="password" placeholder="비밀번호" />
                                </div>
                                <div className="loginButtonBox">
                                    <button
                                        className={(this.state.inputId.length >= 5 && this.state.inputId.includes('@')) && this.state.inputPwd.length >= 5 ? "loginButton1" : "loginButton"} onClick={this.handleClick, this.goToMain}
                                        disabled={(this.state.inputId.length >= 5 && this.state.inputId.includes('@')) && this.state.inputPwd.length >= 5 ? false : true}
                                    >
                                        로그인
                                        </button>
                                </div>
                                <div className="formLineDrawing">
                                    <div className="formUnderLine"></div>
                                    <div className="formTextUnderLine">또는</div>
                                    <div className="form_underline"></div>
                                </div>
                                <div className="facebookLoginBtn">
                                    <button className="facebookLogin">
                                        <span className="facebookImg">
                                        </span>
                                        <span className="facebookText">Facebook으로 로그인</span>
                                    </button>
                                </div>
                                <div className="resetPassword">
                                    <a href="naer.comm" > 비밀번호를 잊으셨나요?</a>
                                </div>
                            </div>
                            <div className="account">
                                <p>계정이 없으신가요?
                                    <span className="account_join">가입하기</span>
                                </p>
                            </div>
                            <div className="appDownBox">
                                <p className="appDownClick">앱을 다운로드하세요.</p>
                                <a className="iosAppDownlod" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" >
                                    <img alt="ios App Download"
                                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
                                </a>
                                <a className="android AppDownlod"
                                    href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D1B22F7DC-1E27-48A5-BBDA-2A8F6516472E%26utm_content%3Dlo%26utm_medium%3Dbadge" >
                                    <img alt="gogle-play app download"
                                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
                                </a>
                            </div>
                        </div>
                    </article >
                    <footer className="footerSheet">
                        <div className="footerContainer">
                            <nav className="footerNavBar">
                                <ul className="footerLists">
                                    <li className="footerList">소개</li>
                                    <li className="footerList">도움말</li>
                                    <li className="footerList">홍보센터</li>
                                    <li className="footerList">API</li>
                                    <li className="footerList">채용정보</li>
                                    <li className="footerList">개인정보처리방침</li>
                                    <li className="footerList">약관</li>
                                    <li className="footerList">위치</li>
                                    <li className="footerList">인기 계정</li>
                                    <li className="footerList">해시태그</li>
                                    <li className="footerList">언어</li>
                                    <span className="footerCopyLight">©2020 INSTAGRAM FROM FACEBOOK</span>
                                </ul>
                            </nav>
                        </div>
                    </footer>
                </main >
            </section>
        );
    }
}
export default withRouter(Login);