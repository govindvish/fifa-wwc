import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { teamList } from '../store/actions/teamActions';
import Spinner from '../helpers/Spinner';


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {

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

    componentDidMount() {
        this.props.teamList();
    }

    render() {
        if(!Object.keys(this.props.teamData.teamList).length) {
            return (
                <Spinner />
            )
        }
        return (
            <div className="container-fluid">
                <div className="row my-5">
                {
                    (this.props.teamData.teamList || []).map(data => 
                        <div className="col-md-4 card-container mb-4" key={data.id} onMouseOver={() => this.addStyleClass(data.country)} onMouseOut={this.removeStyleClass}>
                            <div className={this.state.styleClass === data.country ? "card card-bg-brown p-5 text-center text-white transition-effect" : "card plain-card p-5 text-center text-dark"}>
                                <h1 className="font-weight-light">{data.country}</h1>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ teamData: state.team });

const mapDispatchToProps = dispatch => bindActionCreators({ teamList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teams);