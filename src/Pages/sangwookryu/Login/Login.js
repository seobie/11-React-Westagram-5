import React from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      idValue: "",
      pwValue: "",
    };
  }

  handleUserName = (e) => {
    this.setState({ idValue: e.target.value });
  };

  handlePw = (e) => {
    this.setState({ pwValue: e.target.value });
  };

  handleLogin = () => {
    fetch("http://10.58.4.237:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  goToMain = () => {
    this.props.history.push("/main-ryu");
  };

  render() {
    const enabled =
      this.state.idValue.includes("@") === true &&
      this.state.pwValue.length > 4;

    return (
      <div className="Login">
        <div className="login-scene">
          <h1 className="logo-instagram"></h1>
          <div className="login-container">
            <input
              className="login-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleUserName}
              name="idValue"
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePw}
              name="pwValue"
            />
            <button
              className="login-button"
              onClick={this.goToMain}
              name="loginBtn"
              disabled={!enabled}
            >
              로그인
            </button>
          </div>
          <div className="forget-pw">
            <a
              href="https://www.instagram.com/accounts/password/reset/"
              target="blank"
            >
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
        <script src="js/login.js"></script>
      </div>
    );
  }
}

export default withRouter(Login);
