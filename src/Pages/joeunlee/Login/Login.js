import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginJoEun extends React.Component {
  constructor() {
    super();
    this.state = {
      idVal: "",
      pswVal: "",
    };
  }
  goToMain = () => {
    this.props.history.push("/main-joeun");
  };

  handleId = (e) => {
    this.setState({ idVal: e.target.value });
  };

  handlePsw = (e) => {
    this.setState({ pswVal: e.target.value });
  };
  // handleClick = (e) => {
  //   e.preventDefault();
  //   fetch("http://10.58.3.254:8000/User/SignIn", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.idVal,
  //       password: this.state.pswVal,
  //     }),
  //   })
  //     .then((res) => res.json()) //json body=> json
  //     .then((res) => console.log(res)); //console 먼저 찍자
  // };
  render() {
    return (
      <div className="Login">
        <div className="innerContainer">
          <h1>
            <img
              className="siteName"
              src="images/joeunlee/logo_text.png"
              alt="instagram"
            />
          </h1>
          <div className="loginPage">
            <form>
              <div className="loginId">
                <input
                  onChange={this.handleId}
                  id="checkId"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div className="loginPsw">
                <input
                  onChange={this.handlePsw}
                  id="checkPsw"
                  type="text"
                  placeholder="비밀번호"
                />
              </div>
              <div className="loginBtn">
                <button
                  onClick={this.goToMain}
                  disabled={
                    this.state.idVal.includes("@") &&
                    this.state.pswVal.length >= 5
                      ? false
                      : true
                  }
                  className={`btn${
                    this.state.idVal.includes("@") &&
                    this.state.pswVal.length >= 5
                      ? "Active"
                      : "Disabled"
                  }`}
                >
                  로그인
                </button>
              </div>
            </form>
            <a className="findPsw" href="/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginJoEun);
