import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {},
  React.createElement("h2", {}, "This is nested element")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
