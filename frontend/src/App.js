import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
