import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Kitchen from "./components/Kitchen/Kitchen";
import Waiter from "./components/Waiter/Waiter";
import Landing from "./components/Landing/Landing";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <h1>todo ok</h1>
          <div>
            <Link to="/">Landing</Link>
          </div>
          <hr />
          <Switch>
            <Route path="/waiter">
              <Waiter />
            </Route>
            <Route path="/kitchen">
              <Kitchen />
            </Route>
            <Route path="/" exact>
              <Landing />
            </Route>
          </Switch>

          <div>
            <Menu />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
