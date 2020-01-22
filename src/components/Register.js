import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      email: "",
      password: "",
      registered: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("A form was submitted after button click");
  };

  render() {
    return (
      <div className="container">
        <input
          type="text"
          placeholder="FirstName"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <input
          type="text"
          placeholder="LastName"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <input
          type="text"
          placeholder="Email"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <input
          type="text"
          placeholder="password"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <button type="submit" onClick={this.handleSubmit}></button>
      </div>
    );
  }
}

export default Register;
