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
  <Provider store={store}>
    <Router>
      <div>
        <switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/Users" component={Users} />
          <Route path="/Contact" component={Contact} />
        </switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(Routing, document.getElementById("root"));
