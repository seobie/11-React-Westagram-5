import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 영섭's 컴포넌트
import LoginSeob from "./Pages/yeongseoblee/Login/Login";
import MainSeob from "./Pages/yeongseoblee/Main/Main";

// 상원's 컴포넌트
import LoginSangWon from "./Pages/sangwonma/Login/Login";
import MainSangWon from "./Pages/sangwonma/Main/Main";

// 상욱's 컴포넌트
import LoginRyu from "./Pages/sangwookryu/Login/Login";
import MainRyu from "./Pages/sangwookryu/Main/Main";

// 조은's 컴포넌트
import LoginJoEun from "./Pages/joeunlee/Login/Login";
import MainJoEun from "./Pages/joeunlee/Main/Main";

// 효정's 컴포넌트
import LoginHyo from "./Pages/hyojeunglee/Login/Login";
import MainHyo from "./Pages/hyojeunglee/Main/Main";

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
