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
                    <div className="col-4 card-matches" onMouseOver={() => this.addStyleClass('matches')} onMouseOut={this.removeStyleClass}>
                        <Link to='/matches'>
                            <div className={this.state.styleClass === 'matches' ? "card card-bg p-5 text-center text-white transition-effect" : "card plain-card p-5 text-center text-dark"}>
                                <h1>Matches</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 card-groups" onMouseOver={() => this.addStyleClass('groups')} onMouseOut={this.removeStyleClass}>
                        <Link to='/groups'>
                            <div className={this.state.styleClass === 'groups' ? "card card-bg p-5 text-center text-white transition-effect" : "card plain-card p-5 text-center text-dark"}>
                                <h1>Groups</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 card-teams" onMouseOver={() => this.addStyleClass('teams')} onMouseOut={this.removeStyleClass}>
                        <Link to='/teams'>
                            <div className={this.state.styleClass === 'teams' ? "card card-bg p-5 text-center text-white transition-effect" : "card plain-card p-5 text-center text-dark"}>
                                <h1>Teams</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;