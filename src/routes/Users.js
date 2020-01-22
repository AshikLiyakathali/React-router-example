import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [
      { id: 1, content: "Ashik" },
      { id: 2, content: "Liyakathali" },
      { id: 3, content: "ashik21395@gmail.com" }
    ];
  }

  calledFromChild = data => {
    console.log("data received from child component" + data);
  };

  render() {
    return (
      <ul>
        {this.arr.map((element, index) => {
          return <UsersList data={element} onClick={this.props.onClick} />;
        })}
      </ul>
    );
  }
}

class UsersList extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.data.id);
    this.props.callParentMethod(this.props.data.id);
  };

  render() {
    return (
      <div>
        <UsersList
          onClick={this.props.onClick}
          callParentMethod={this.calledFromChild}
        />
        <li onClick={this.handleClick}>{this.props.data.content}</li>
      </div>
    );
  }
}

export default UsersList;
