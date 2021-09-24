import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'

export default class SearchPage extends Component {
    state = {
        searchPokemon: '',
        sortPokemon: '',
        pokemonArray: [],
        loading: false,

    }

    getPokemon = async () => {
        this.setState({ loading: true })
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}&sort=pokemon&direction=${this.state.sortPokemon}`);
        console.log(response.body)
        this.setState({ pokemonArray: response.body.results, loading: false })

    }

    submitPokemon = (e) => {
        e.preventDefault()
        this.getPokemon()

    }
    componentDidMount = async => {
        this.getPokemon()
    }

    findPokemon = (e) => {
        this.setState({ searchPokemon: e.target.value })

    }


    pokemonSort = (e) => {
        this.setState({ sortPokemon: e.target.value })
    }




    render() {
        console.log(this.state.sortPokemon);
        return (
            <div>
                <form onSubmit={this.submitPokemon}>
                    <select onChange={this.pokemonSort}>
                        <option value="asc"> ASC</option>
                        <option value='desc'>DSC</option>
                    </select>
                    <input onChange={this.findPokemon} />
                    <button>Search</button>
                </form>
                <PokeList pokeArray={this.state.pokemonArray} />
            </div>
        )
    }
}
