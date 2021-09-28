import React, { Component } from 'react'
export default class PokemonItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <img src={this.props.url_image} alt="" />
                        <br />
                        Name: {this.props.pokemon}
                        <br />
                        Type: {this.props.type_1}
                        <br />
                        HP: {this.props.hp}
                        <br />
                        Attack: {this.props.attack}
                        <br />
                        Height: {this.props.height}
                        <br />
                        Weight: {this.props.weight}
                        <br />
                        Special Attack: {this.props.special_attack}
                        <br />
                        Special Defense: {this.props.special_defense}
                        <br />
                        Ability 1: {this.props.ability_1}
                        <br />
                        Ability 2: {this.props.ability_2}

                    </li>
                </ul>
            </div>
        )
    }
}
