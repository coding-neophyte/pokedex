import React, { Component } from 'react'
import request from 'superagent'
import Header from './Header'
import PokemonItem from './PokemonItem'



export default class Details extends Component {
    state = {
        pokemon: {},
        loading: false,
    }

    componentDidMount = async () => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({ pokemon: response.body, loading: true })

    }
    render() {
        return (
            <div>
                <Header />
                <button onClick={this.previousPageClick}> Prev </button>
                <button onClick={this.nextPageClick}> Next </button>
                <PokemonItem {...this.state.pokemon} />

            </div>
        )
    }
}
