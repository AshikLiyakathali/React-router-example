import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

import Home from "./routes/Home";
import Users from "./routes/Users";
import Contact from "./routes/Contact";
import PrivateRoute from "./routes/PrivateRoute";

import Login from "./components/Login";
import Register from "./components/Register";

import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <PrivateRoute path="/Users" component={Users} />
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);
