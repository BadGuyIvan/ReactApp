import React from "react";
import { render } from "react-dom";
import App from "./component/App";
import { HashRouter as Router, Route} from "react-router-dom";

render(
    <Router>
        <App/>
    </Router>,
  document.getElementById('root')
)