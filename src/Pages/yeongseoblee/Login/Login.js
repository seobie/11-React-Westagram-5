import React from "react";
import { Link } from "react-router-dom";
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
  };

  handleClick = (e) => {
    e.preventDefault();
    fetch("http://10.58.3.51:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        phone_number: this.state.account,
        password: this.state.password,
      }),
    })
      .then((res) => res.json()) // JSON body => JS
      .then((res) => sessionStorage.setItem("access_token", res.access_token));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const screenshots = [
      "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
    ];
    const { account, password } = this.state;

    const footerObj = {
      about: "https://about.instagram.com/",
      help: "https://help.instagram.com/",
      press: "https://about.instagram.com/blog/",
      api: "https://www.instagram.com/developer/",
      jobs: "https://www.instagram.com/about/jobs/",
      privacy: "https://help.instagram.com/519522125107875",
      terms: "https://help.instagram.com/581066165581870",
      locations: "https://www.instagram.com/explore/locations/",
      "top accounts": "https://www.instagram.com/directory/profiles/",
      hashtags: "https://www.instagram.com/directory/hashtags/",
      language: "#",
    };
    return (
      <div className="Login">
        <article>
          <div className="leftContainer">
            <div className="phoneFrame">
              <div className="imagesInPhone">
                {screenshots.map((screenshotSrc, idx) => (
                  <img key={idx} alt={`screensho${idx}`} src={screenshotSrc} />
                ))}
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="logInWrapper">
              <h1 className="instaLogo">Instagram</h1>
              <div className="logInInputsContainer">
                <form>
                  <div className="logInInputs" onChange={this.handleChange}>
                    <input
                      className="accountInput"
                      type="text"
                      name="account"
                      babo="me"
                      placeholder="Phone number, username, or email"
                    />
                    <input
                      className="passwordInput"
                      type="password"
                      name="password"
                      placeholder="Password"
                      // value={password}
                    />
                    <button
                      className={
                        account.includes("@") && password.length > 5
                          ? "logInBtnActive"
                          : "logInBtn"
                      }
                      disabled={
                        account.includes("@") && password.length > 5
                          ? false
                          : true
                      }
                      onClick={(this.handleClick, this.goToMain)}
                    >
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
              {Object.keys(footerObj).map((key, idx) => (
                <li>
                  <a key={idx} href={footerObj[key]}>
                    {key}
                  </a>
                </li>
              ))}
            </ul>
            <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Login;
