import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCart = this.handleCart.bind(this);
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.state = {
      cart: [],
      pokemonshop: [],
      myPokemons: [],
      pokemonUrl: []
    };
  }

  getPokemonUrl = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
    );
    const json = await response.json();

    this.setState({
      pokemonUrl: json.results
    });
    this.getPokemonObject();
  };

  getPokemonObject = async () => {
    // let pokemonArray = [];
    try {
      /* this.state.pokemonUrl.map(async element => {
        const response = await fetch(element.url);
        let json = await response.json();
        pokemonArray.push(json);
        console.log(json);
      }); */
      const pokemonSimple = this.state.pokemonUrl;
      pokemonSimple.map(async ({ url }) => {
        const response = await fetch(url);
        const json = await response.json();
        /* this.setState(prevState => ({
          pokemonshop: [...prevState.pokemonshop, json]
        })); */
        this.setState({
          pokemonshop: [...this.state.pokemonshop, json]
        });
      });
    } catch {}
    /* console.log(pokemonArray);

    this.setState({
      pokemonshop: pokemonArray
    }); */
  };

  componentDidMount() {
    // este metodo se ejectua SIEMPRE que el componente se ponga en pantalla
    if (this.state.pokemonshop.length === 0) {
      this.getPokemonUrl();
    }
  }

  handleCart(pokemon) {
    this.setState({
      cart: [...this.state.cart, pokemon],
      pokemonshop: this.state.pokemonshop.filter((_, i) => i !== pokemon)
    });
  }

  handleCartRemove(pokemon) {
    this.setState({
      pokemonshop: [...this.state.pokemonshop, pokemon],
      cart: this.state.cart.filter((_, i) => i !== pokemon)
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          pokemonshop={this.state.pokemonshop}
          carrito={this.state.cart}
          listaPoke={this.state.myPokemons}
          handleCart={this.state.handleCart}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
