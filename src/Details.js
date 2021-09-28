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
        this.setState({ loading: true })
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({ pokemon: response.body, loading: false })

    }
    render() {
        return (
            <div>
                <Header />
                {this.state.loading ? <img src="https://wallpaperaccess.com/full/3897424.jpg" alt="" /> :
                    <PokemonItem {...this.state.pokemon} />
                }
            </div>
        )
    }
}
