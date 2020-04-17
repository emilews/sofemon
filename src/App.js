import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adopt from "./components/adopted/adopted";
import Checkout from "./components/checkout/checkout";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PokemonCard from "./components/PokemonCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      pokemonshop: [this.getPokemonObjects]
    };
  }

  getPokemonObjects = () => {
    let PokeObjects = [];
    for (let i = 0; i < 50; i++) {
      PokeObjects.push(
        fetch("https://pokeapi.co/api/v2/pokemon/" + i.toString + "/")
      );
    }
    return PokeObjects;
  };

  getAllPokemonMetaData() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <Header />
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

        <Footer />
      </div>
    );
  }
}
export default App;
