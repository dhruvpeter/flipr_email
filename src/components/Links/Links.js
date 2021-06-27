import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import History from "../History/History";
import Compose from "../Compose/Compose";
import SelectedMailHistory from "../History/SelectedMailHistory/SelectedMailHistory";
import SelectedMailHome from "../Home/SelectedMailHome/SelectedMailHome";
import AlertSuccess from "../Compose/AlertSuccess/AlertSuccess";
import AlertFailure from "../Compose/AlertFailure/AlertFailure";
import Nav from "../Navigationbar/Navigationbar";
export default function Links(props) {
  const token = 123;
  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          path="/home"
          render={(props) => <Home {...props} token={token} />}
        />
        <Route
          path="/history"
          render={(props) => <History {...props} token={token} />}
        />
        <Route
          path="/compose"
          render={(props) => <Compose {...props} token={token} />}
        />
        <Route
          path="/selectedmailhistory"
          render={(props) => <SelectedMailHistory {...props} token={token} />}
        />
        <Route
          path="/selectedmailhome"
          render={(props) => <SelectedMailHome {...props} token={token} />}
        />
        <Route
          path="/compose/alertsuccess"
          render={(props) => <AlertSuccess {...props} token={token} />}
        />
        <Route
          path="/compose/alertfailure"
          render={(props) => <AlertFailure {...props} token={token} />}
        />
      </Switch>
    </Router>
  );
}
