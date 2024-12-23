import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("about constructor called");
  }

  componentDidMount() {
    // console.log("about component did mount called");
  }

  render() {
    // console.log("about render called");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User: 
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is the about page</h2>

        <UserClass name={"Krishan Kaushik"} contact={"@godkk"} />
      </div>
    );
  };
};

export default About;
