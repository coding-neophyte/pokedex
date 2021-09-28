import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'
import './App.css'
import Header from './Header'


export default class SearchPage extends Component {
    state = {
        searchPokemon: '',
        sortPokemon: '',
        pokemonArray: [],
        loading: false,
        currentPage: 1,

    }

    getPokemon = async () => {
        this.setState({ loading: true })
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}&sort=pokemon&direction=${this.state.sortPokemon}&page=${this.state.currentPage}&perPage=30`);
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

    previousPageClick = async () => {
        await this.setState({ currentPage: this.state.currentPage - 1 })
        this.getPokemon()
    }

    nextPageClick = async () => {
        await this.setState({ currentPage: this.state.currentPage + 1 })
        this.getPokemon()
    }


    render() {
        console.log(this.state.sortPokemon);
        return (
            <div>
                <Header />
                <h1> Find Your Pokemon</h1>
                <p> Search for Pokemon or filter using dropdown below</p>
                <form onSubmit={this.submitPokemon}>
                    <select onChange={this.pokemonSort}>
                        <option value="asc"> ASC</option>
                        <option value='desc'>DSC</option>
                    </select>
                    <input onChange={this.findPokemon} />
                    <button>Search</button>
                </form>
                <button onClick={this.previousPageClick}> Prev </button>
                <button onClick={this.nextPageClick}> Next </button>
                <PokeList pokeArray={this.state.pokemonArray} />
            </div>
        )
    }
}
