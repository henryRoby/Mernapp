
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;