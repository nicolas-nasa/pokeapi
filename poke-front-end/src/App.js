import React,{ Component } from 'react';
import api from './api';

class App extends Component{

  state = {
    pokemon: {},
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({ pokemon: response.data });
  }

   refreshPage() {
    window.location.reload(false);
  }

  render(){
    
    const { pokemon } = this.state;

    var style = { backgroundColor: '#'+ pokemon.color };

    return(
      <div style = {style}>
        <h1>pokemon capturado: {pokemon.nome}</h1>
        <img src={pokemon.sprite}/>
        <button onClick={this.refreshPage} >Capture um pokemon</button>
        {console.log(pokemon)}
      </div>
    );
  }
}

export default App;
