import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                <img src={this.props.img} alt={this.props.type} />
                {this.props.name}
                {this.props.type}
            </li>
        )
    }
}
