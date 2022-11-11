//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import TrafficLight from "./component/home.jsx";


//render your react application
ReactDOM.render(<div>
    <TrafficLight/>
</div>
, document.querySelector("#app"));
