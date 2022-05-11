import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './Assets/Styles/style.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserProvider from "./Context/UserContext";
import Dashboard from "./Components/Dashboard";
import Reports from "./Components/Reports";
import InstaHOC from "./Components/HOC";

export function ret() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/" component={InstaHOC(Dashboard)} />
          <Route exact path="/dashboard" component={InstaHOC(Dashboard)} />
          <Route exact path="/reports" component={InstaHOC(Reports)} />
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
