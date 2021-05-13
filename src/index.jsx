import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Work from "./pages/work";
import NavBar from "./components/navbar";
import Darkmode from "./components/Context";

const App = () => {
  const [darkMode, setDarkmode] = React.useState(false);

  return (
    <Router>
      <Darkmode.Provider
        value={{
          darkMode,
          ChangeMode: () => {
            darkMode ? setDarkmode(false) : setDarkmode(true);
            localStorage.clear();
            localStorage.setItem("client", darkMode);
          },
        }}
      >
        <main className={localStorage.client === "true" ? "darkMode" : "light"}>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/work/:project">
              <Work />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
          </Switch>
        </main>
      </Darkmode.Provider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
