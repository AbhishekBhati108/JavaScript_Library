import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component mounted");
    // API call
    const data = await fetch("https://api.github.com/users/AbhishekBhati108");
    const json = await data.json();
    //  console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userInfo;
    //  console.log(name);

    return (
      <div className="user-card">
        <img src="avatar_url"></img>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Constact: @abhishekAugust17</h4>
      </div>
    );
  }
}

export default UserClass;
