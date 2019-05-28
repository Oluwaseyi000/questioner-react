import React from "react";
import ReactDOM from "react-dom";
import "./css/sample.css";
import testImage from "./images/rose-blue-flower-rose-blooms-67636(1).jpeg";

const App = () => (
  <div>
    hello seyi dwebpakc
    <img src={testImage} alt="" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
