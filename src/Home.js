import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="homepage">
                    <h1 className="HomeTitle"> The Pokedex </h1>

                </div>
                <div className="enter">
                    <NavLink to="/pokemon/" activeClassName="enterButton"> <button className="enterButton"> Enter </button> </NavLink>

                </div>
            </>
        )
    }
}
