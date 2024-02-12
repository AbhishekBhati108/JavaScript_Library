import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component mounted");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is About Us page of our WebApp.</h1>
        <UserClass name={"First"} location={"Greater Noida"} />
      </div>
    );
  }
}

export default About;
