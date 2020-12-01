import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
           <ul>
                <li>
                    <NavLink exact to="/beers">All Beers</NavLink>
                </li>
                
                <li>
                    <NavLink exact to="/beers/random">Random Beer</NavLink>
                </li>
                <li>
                    <NavLink exact to="/beers/add">New Beer</NavLink>
                </li>
            </ul> 
        </nav>
    )
}

export default Navbar;