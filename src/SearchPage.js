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
                <p> Page Number: {this.state.currentPage}</p>
                {this.state.loading ? <img src="https://www.supereasy.com/wp-content/uploads/2020/02/2020-02-12_19-13-36.jpg" alt="" /> :
                    <form onSubmit={this.submitPokemon}>
                        <select onChange={this.pokemonSort} className="DropDown">
                            <option value="asc"> ASC</option>
                            <option value='desc'>DSC</option>
                        </select>
                        <input onChange={this.findPokemon} />
                        <button className='Search'>Search</button>
                    </form>
                }
                {this.state.currentPage !== 1 ? <button onClick={this.previousPageClick} className="Button"> Prev Page  </button> : null}
                {this.state.currentPage !== 27 ? <button onClick={this.nextPageClick} className="Button"> Next Page </button> : null}
                <PokeList pokeArray={this.state.pokemonArray} />
            </div>
        )
    }
}
