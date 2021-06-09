import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Signup from "./pages/Signup";
import ManageProfile from "./pages/ManageProfile";
import CreatePost from "./pages/CreatePost";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/manageprofile">
          <ManageProfile />
        </Route>
        <Route path="/createpost">
          <CreatePost />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
