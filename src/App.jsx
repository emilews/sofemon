import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
const pokemonShop = React.createContext([]);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      pokemonshop: pokemonShop,
      myPokemons: []
    };
  }

  getPokemonObjects = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50"
    );
    const json = await response.json();
    this.setState({
      pokemonshop: json.results
    });
  };

  componentDidMount() {
    // este metodo se ejectua SIEMPRE que el componente se ponga en pantalla
    if (this.state.pokemonshop.length === 0) {
      this.getPokemonObjects();
    }
  }

  render() {
    // console.log(this.state.pokemonshop);
    return (
      <div className="App">
        <Header />
        <h1>{this.state.pokemonshop.length}</h1>
        <Footer />
      </div>
    );
  }
}
export default App;
