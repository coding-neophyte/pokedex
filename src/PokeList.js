import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.pokeArray.map((poke) => <PokeItem key={poke.pokemon} img={poke.url_image} name={poke.pokemon} type={poke.type_1} />)}

                </ul>
            </div>
        )
    }
}
