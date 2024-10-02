import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("about constructor called");
  }

  componentDidMount() {
    console.log("about component did mount called");
  }

  render() {
    console.log("about render called");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is the about page</h2>

        <UserClass name={"Krishan Kaushik"} contact={"@godkk"} />
      </div>
    );
  }
}

export default About;
