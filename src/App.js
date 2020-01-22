import React from "react";
import { connect } from "react-redux";
import { Form, Input, Tooltip, Button, Select, Checkbox, Icon } from "antd";
import "./App.css";
import { loginUser } from "./redux/actions/index";

const ErrorValidationLabel = ({ txtLbl }) => (
  <label htmlFor="" style={{ color: "red", display: "block" }}>
    {txtLbl}
  </label>
);

class App extends React.Component {
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

  onTextChange = e => {
    const { name, value } = e.target;
    this.setState((prevState, prevProps) => {
      // below is incorrect way of wrting, it will throw error- learn why?
      //return {[e.target.value]: e.target.value}
      return { [name]: value };
    });
  };

  isValid = () => {
    const { username, password } = this.state;
    if (username.length === 0 || password.length === 0) {
      this.setState({
        isValid: false,
        errorText: "Enter your Username and Password to Login"
      });
      return false;
    }
    if (
      username.indexOf("@gmail.com") === -1 &&
      username.indexOf("@rsrit.com") === -1
    ) {
      this.setState({
        isValid: false,
        errorText: "Enter a valid email id"
      });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (this.isValid()) {
      this.props.dispatch(loginUser(username, password));
    }
  };
  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.result !== prevState.result) {
      console.log(newProps.result);
    }
    return null;
  }
  render() {
    const { username, password, errorText, isValid } = this.state;
    const renderValidationError = isValid ? (
      ""
    ) : (
      <ErrorValidationLabel txtLbl={errorText} />
    );
    return (
      <div className="App">
        <Form>
          <Input
            placeholder="Enter your Username"
            name="username"
            value={this.state.username}
            onChange={this.onTextChange}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={
              <Tooltip title="Enter your Username">
                <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Input.Password
            name="password"
            onChange={this.onTextChange}
            value={this.state.password}
            placeholder="Enter your Password"
            prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
          <Button type="primary" onClick={this.handleSubmit}>
            Login
          </Button>
          {renderValidationError}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.login.result
  };
};
export default connect(mapStateToProps)(App);
