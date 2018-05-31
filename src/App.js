import React from "react";
import { ROUTES } from "./routes";
import Devtools from 'mobx-react-devtools';

import {
  BrowserRouter as Router,
  Route
  // Link
} from "react-router-dom";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <Devtools />
      {ROUTES.map((route, idx) => (
        <Route exact key={idx} path={route.path} component={route.component} />
      ))}
    </div>
  </Router>
);

export default App;
