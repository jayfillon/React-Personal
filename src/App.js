import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./pages/homepage/header.component";
import Body from "./pages/bodypage/body.component";
import About from "./pages/aboutpage/about.component";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/body" component={Body} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
