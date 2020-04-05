import React from "react";

import Header from './pages/homepage/header.component';
import Body from './pages/bodypage/body.component';
import About from './pages/aboutpage/about.component';

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Body/>
      <About/>
    </div>
  );
}

export default App;
