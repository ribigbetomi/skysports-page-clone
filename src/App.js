import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Skysports from "./components/skysports";
// import GetSky from "./components/getSky";
import NavBar from "./components/navBar";
import SkysportsPage from "./components/skysportsPage";
import Video from "./components/video";
import ReadNewsPost from "./components/readNewsPost";
import williamsonOnWiegman from "./components/williamsonOnWiegman";

function App() {
  return (
    <header>
      <div>
        <Skysports />
      </div>
      <div className="nav-area">
        <NavBar />
      </div>

      <Switch>
        <Route path="/video" component={Video} />
        <Route path="/skysports" component={SkysportsPage} />
        <Route path="/wales-ukraine-win" component={ReadNewsPost} />
        <Route path="/williamson-on-wiegman" component={williamsonOnWiegman} />
        <Redirect from="/" exact to="/skysports" />
      </Switch>
    </header>
  );
}

export default App;
