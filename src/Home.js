import React, { Component } from 'react'

import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 className="HomeTitle"> The Pokedex </h1>
            </div>
        )
    }
}
