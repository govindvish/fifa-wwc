import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleClass: ''
        }
    }

    addStyleClass = (styleState) => {
        this.setState({
            styleClass: styleState
        })
    }

    removeStyleClass = () => {
        this.setState({
            styleClass: ''
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center" style={{ height: 80 + 'vh' }}>
                    <div className="col-md-4 card-container" onMouseOver={() => this.addStyleClass('matches')} onMouseOut={this.removeStyleClass}>
                        <Link to='/matches'>
                            <div className={this.state.styleClass === 'matches' ? "card card-bg-brown p-5 text-center text-white transition-effect" : "card plain-card p-5 text-center text-dark"}>
                                <h1 className="font-weight-light">Matches</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 card-container" onMouseOver={() => this.addStyleClass('groups')} onMouseOut={this.removeStyleClass}>
                        <Link to='/groups'>
                            <div className={this.state.styleClass === 'groups' ? "card card-bg-brown p-5 text-center text-white transition-effect" : "card plain-card p-5 text-center text-dark"}>
                                <h1 className="font-weight-light">Groups</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 card-container" onMouseOver={() => this.addStyleClass('teams')} onMouseOut={this.removeStyleClass}>
                        <Link to='/teams'>
                            <div className={this.state.styleClass === 'teams' ? "card card-bg-brown p-5 text-center text-white transition-effect" : "card plain-card p-5 text-center text-dark"}>
                                <h1 className="font-weight-light">Teams</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;