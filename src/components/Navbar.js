import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        FIFA-WWC
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" activeclassname="active" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeclassname="active" to="/">MATCHES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeclassname="active" to="/">GROUPS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeclassname="active" to="/">TEAMS</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;