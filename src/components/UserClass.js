import User from "./User";
import { useState } from "react"; 
import React from "react";  

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        console.log("user class constructor called");
    }

  render() {
    const {name, contact} = this.props;
    const {count} = this.state;
    console.log("user class render called");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count + 1,
            })
        }}>Increase Count</button>
        <button onClick={()=>{
            this.setState({
                count: this.state.count - 1,
            })
        }}>Decrease Count</button>
        <button onClick={()=>{
            this.setState({
                count: this.state.count = 0,
            })
        }}>Reset</button>
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;