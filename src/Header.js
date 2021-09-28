import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <>
                <div>
                    <NavLink to="/" activeClassName="Home"> Home</NavLink>


                    <NavLink to="/pokemon/" activeClassName="Pokedex"> PokeDex </NavLink>


                </div>
            </>
        )
    }
}
