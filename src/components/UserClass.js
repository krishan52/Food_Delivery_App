import User from "./User";
import { useState } from "react";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "sample",
        location: "default",
        contact: "any address",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krishan52");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} className="profile"/>
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
      </div>
    );
  }
}

export default UserClass;
