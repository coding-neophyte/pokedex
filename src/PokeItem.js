import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                <Link to={`/pokemon/${this.props.id}`}>
                    <img src={this.props.img} alt={this.props.type} />
                    <br />
                    Name: {this.props.name}
                    <br />
                    Type: {this.props.type}
                    <br />
                    HP: {this.props.hp}
                    <br />
                    Attack: {this.props.attack}

                </Link>
            </li>
        )
    }
}
