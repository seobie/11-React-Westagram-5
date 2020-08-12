import React from "react";
import "./Login.scss"
import "../../../Styles/common.scss"
import "../../../Styles/reset.scss"
import { withRouter } from "react-router-dom";

class LoginJoEun extends React.Component {
  constructor() {
    super()
    this.state = {
      idVal: "",
      pswVal: ""
    }
  }
  // goToMain = () => {
  //   this.props.history.push('/main-joeun')
  // };
  consoleId = (e) => {
    this.setState({idVal: e.target.value})
  }
  consolePsw = (e) => {
    this.setState({pswVal: e.target.value})
  }
  consoleVal = (e) => {
    e.preventDefault()
    console.log('Id :', this.state.idVal,',Password :',  this.state.pswVal)
  }
  render() {
    let condition = this.state.idVal.includes('@')&&this.state.pswVal.length>=5;
    return (
      <div className="Login">
        <div className="innerContainer">
          <h1><img className="siteName" src="images/joeunlee/logo_text.png" alt="instagram" /></h1>
          <div className="loginPage">
            <form>
              <div className="loginId"><input onChange={this.consoleId} id="checkId" type ="text" placeholder="전화번호, 사용자 이름 또는 이메일" /></div>
              <div className="loginPsw"><input onChange={this.consolePsw} id="checkPsw" type ="text" placeholder="비밀번호" /></div>
              <div className="loginBtn">
                <button 
                onClick={
                  this.consoleVal
                }
                disabled={
                  condition? false : true 
                }
                className={
                  `btn${condition ? "Active" : "Disabled"}`
                }
                >
                  로그인
                </button>
              </div>
            </form>
            <a className="findPsw" href="">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginJoEun);