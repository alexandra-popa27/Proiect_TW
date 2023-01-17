import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="nav">
            <img src="bug.png" width="60px" height="60px"></img>
            <h1 className="navbar-logo">The bug app</h1>
            <div className="menu-icon">
            </div>
            <ul>
                <li>
                    <a href="/login">Sign in</a>
                </li>
                <li>
                    <a href="/bugs">Bugs</a>
                </li>
                <li>
                    <a href="/proiecte">Projects</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;