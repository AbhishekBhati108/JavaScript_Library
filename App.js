import React from "react";
import ReactDOM from "react-dom";

// React.createContext => React element - JS Object => HTML Element(render)
/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  React.createElement("h2", {}, "This is nested element")
);*/

// JSX => React.createContext => React element - JS Object => HTML Element(render)

const Title = () => (
  <h1 className="title" tabIndex={1}>
    This is React App.
  </h1>
);

// React functional compontent
const HeadingCompontent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">This is React functional compontent.</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompontent />);
