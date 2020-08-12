import React, { Component } from "react";
import "./Login.scss";
import "../../../Styles/common.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idValue: "",
      passwordValue: "",
    };
  }

  handleIdEvent = (e) => {
    this.setState({ idValue: e.target.value });
  };

  handlePasswordEvent = (e) => {
    this.setState({ passwordValue: e.target.value });
  };

  locationEvent = (e) => {
    fetch("http://10.58.2.217:8000/user/sign-in", {
      method: "POST",
      body: JSON.stringify({
        account: this.state.idValue,
        password: this.state.passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  render() {
    return (
      <div className="Login">
        <div className="wrap">
          <main className="mainBox">
            <div className="logo">
              <img alt="logo" src="/images/hyojeunglee/logo_text.png" />
            </div>
            <div className="loginBox">
              <div className="loginForm" onCreate={this.envetReset}>
                <input
                  type="text"
                  className="idName"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={this.handleIdEvent}
                  name="idValue"
                />
                <input
                  type="password"
                  className="password"
                  placeholder="비밀번호"
                  onChange={this.handlePasswordEvent}
                  name="passwordValue"
                />
                <input
                  type="button"
                  className={
                    this.state.idValue.includes("@") &&
                    this.state.passwordValue.length >= 5
                      ? "setLoginButton"
                      : "loginButton"
                  }
                  value="로그인"
                  onClick={this.locationEvent}
                />
              </div>
            </div>
            <div className="helpText">
              <span>비밀번호를 잊으셨나요?</span>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Login;
