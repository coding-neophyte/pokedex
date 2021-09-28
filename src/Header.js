import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <>
                <div className="Nav">
                    <NavLink to="/" activeClassName="Home"> <button> Home</button></NavLink>


                    <NavLink to="/pokemon/" activeClassName="Pokedex"> <button> PokeDex </button> </NavLink>


                </div>
            </>
        )
    }
}
