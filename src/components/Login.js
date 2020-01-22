import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, Checkbox, Icon } from "antd";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorText: "",
      isValid: true,
      result: ""
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: [value] });
  };

  isValid = () => {
    const { username, password } = this.state;
    if (username.length === 0 || password.length === 0) {
      this.setState({
        isValid: false,
        errorText: "Enter username and password before hitting submit button"
      });
    }

    if (
      username.indexOf("@gmail.com") !== -1 ||
      username.indexOf("@rsrit.com" !== -1)
    )
      this.setState({
        isValid: false,
        errorText: "Email should be from gmail or rsrit only"
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.isValid()) {
      console.log("username entered is:", this.state.username);
      console.log("password entered is: ", this.state.password);
    }
  };

  render() {
    return (
      <div className="container">
        <Form className="login-form">
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Enter username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <Button className="primary" type="primary">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
