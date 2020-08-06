import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 영섭's 컴포넌트
import LoginSeob from "./pages/yeongseoblee/Login/Login";
import MainSeob from "./pages/yeongseoblee/Main/Main";

// 상원's 컴포넌트
import LoginSangWon from "./pages/sangwonma/Login/Login";
import MainSangWon from "./pages/sangwonma/Main/Main";

// 상욱's 컴포넌트
import LoginRyu from "./pages/sangwookryu/Login/Login";
import MainRyu from "./pages/sangwookryu/Main/Main";

// 조은's 컴포넌트
import LoginJoEun from "./pages/joeunlee/Login/Login";
import MainJoEun from "./pages/joeunlee/Main/Main";

// 효정's 컴포넌트
import LoginHyo from "./pages/hyojeunglee/Login/Login";
import MainHyo from "./pages/hyojeunglee/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-seob" component={LoginSeob} />
          <Route exact path="/main-seob" component={MainSeob} />
          <Route exact path="/login-sangwon" component={LoginSangWon} />
          <Route exact path="/main-sangwon" component={MainSangWon} />
          <Route exact path="/login-ryu" component={LoginRyu} />
          <Route exact path="/main-ryu" component={MainRyu} />
          <Route exact path="/login-joeun" component={LoginJoEun} />
          <Route exact path="/main-joeun" component={MainJoEun} />
          <Route exact path="/login-hyo" component={LoginHyo} />
          <Route exact path="/main-hyo" component={MainHyo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
