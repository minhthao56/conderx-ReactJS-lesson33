import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import checkLoginAIP from "./api/checkLoginAIP";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    checkLoginAIP.checkLogin().then((res) => {
      dispatch({
        type: "CHECK_LOGGED",
        data: res,
      });
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/login">
            <Login />
          </Route>
          <Route exact path="/user/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
