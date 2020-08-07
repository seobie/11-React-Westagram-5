import React from "react";
import { Link } from "react-router-dom";
import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      account: "",
      password: "",
    };
  }
  goToMain = () => {
    this.props.history.push("/main-seob");
    console.log("clicked!");
  };

  handleAccount = (e) => {
    this.setState({ account: e.target.value });
    this.setState({ value: e.target.value });
    console.log(`${e.target.name} : ${e.target.value}`);
    console.log(this.state["account"], this.state["value"]);
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
    this.setState({ value: e.target.value });
    console.log(`${e.target.name} : ${e.target.value}`);
    console.log(this.state["password"], this.state["value"]);
  };

  render() {
    return (
      <div className="Login">
        <article>
          <div className="leftContainer">
            <div className="phoneFrame">
              <div className="imagesInPhone">
                <img
                  alt="innerImage1"
                  src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
                />
                <img
                  alt="innerImage2"
                  src="https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg"
                />
                <img
                  alt="innerImage3"
                  src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg"
                />
                <img
                  alt="innerImage4"
                  src="https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg"
                />
                <img
                  alt="innerImage5"
                  src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
                />
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="logInWrapper">
              <h1 className="instaLogo">Instagram</h1>
              {/* <img alt="Instagram logo" src="images/logo_text.png" /> */}
              <div className="logInInputsContainer">
                <form>
                  <div className="logInInputs">
                    <input
                      className="accountInput"
                      type="text"
                      name="account"
                      onChange={this.handleAccount}
                      placeholder="Phone number, username, or email"
                      value={this.state.value}
                    />
                    <input
                      className="passwordInput"
                      type="password"
                      name="password"
                      onChange={this.handlePassword}
                      placeholder="Password"
                      value={this.state.value}
                    />
                    <button className="loginBtn" onClick={this.goToMain}>
                      Log In
                    </button>
                  </div>
                </form>
                <div className="orLine">
                  <div className="orLines">
                    <span></span>
                  </div>
                  <div className="or">OR</div>
                  <div className="orLines">
                    <span></span>
                  </div>
                </div>
                <div className="additionalRequests">
                  <div className="facebookLogIn">
                    <button>
                      <span className="facebookLogo"></span>
                      <span className="facebookText">Log in with Facebook</span>
                    </button>
                  </div>
                  <div className="forgotPassword">
                    <a href="/">Forgot password?</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="signUp">
              <span>Don't have an anccount?</span>
              <Link to="/signup">Sign up</Link>
              {/* <a href="/">Sign up</a> */}
            </div>
            <span className="getTheApp">Get the app.</span>
            <div className="appStores">
              <img
                alt="Apple App Store"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              />
              <img
                alt="Google Play"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              />
            </div>
          </div>
        </article>
        <footer>
          <nav className="navBottom">
            <ul>
              <li>
                <a href="https://about.instagram.com/">about</a>
              </li>
              <li>
                <a href="/">help</a>
              </li>
              <li>
                <a href="/">press</a>
              </li>
              <li>
                <a href="/">api</a>
              </li>
              <li>
                <a href="/">jobs</a>
              </li>
              <li>
                <a href="/">privacy</a>
              </li>
              <li>
                <a href="/">terms</a>
              </li>
              <li>
                <a href="/">locations</a>
              </li>
              <li>
                <a href="/">top accounts</a>
              </li>
              <li>
                <a href="/">hashtags</a>
              </li>
              <li>
                <a href="/">language</a>
              </li>
            </ul>
            <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Login;
