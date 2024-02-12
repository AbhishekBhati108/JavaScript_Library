import { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    console.log("Demo Constructor");
  }

  componentDidMount() {
    console.log("Demo mounted");
  }

  render() {
    console.log("Demo render");
    return <h3>This is Demo</h3>;
  }
}

export default Demo;
