import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    return(
        <nav className="navbar navbar-expand-lg navbar-light container">
                <a className="navbar-brand" href="/">BikeRent.lt</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#defaultNavbar1" aria-controls="defaultNavbar1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="defaultNavbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bikes" className="nav-link">Bikes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bikes/add" className="nav-link">Add Bike</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Login/Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;