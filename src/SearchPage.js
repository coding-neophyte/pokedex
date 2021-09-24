import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'

export default class SearchPage extends Component {
    state = {
        searchPokemon: '',
        sortPokemon: '',
        pokemonArray: [],

    }

    getPokemon = async () => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}`);
        console.log(response.body)
        this.setState({ pokemonArray: response.body.results })
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

    // pokemonSort = ''



    render() {
        return (
            <div>
                <form onSubmit={this.submitPokemon}>
                    <select>
                        <option value="asc"> ASC</option>
                        <option value='dsc'>DSC</option>
                    </select>
                    <input onChange={this.findPokemon} />
                    <button>Search</button>
                </form>
                <PokeList pokeArray={this.state.pokemonArray} />
            </div>
        )
    }
}
