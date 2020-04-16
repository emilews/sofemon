import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adopt from "./components/adopted/adopted";
import Checkout from "./components/checkout/checkout";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <div>
          <Switch>
            <Route path="/adopted">
              <Adopt />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
