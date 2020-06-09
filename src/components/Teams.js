import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { teamList } from '../store/actions/teamActions';


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.teamList();
    }

    render() {
        console.log(this.props.teamData);
        return (
            <div>
                <div className="text-center">
                    <p className="dashboard-content">Teams</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ teamData: state.team });

const mapDispatchToProps = dispatch => bindActionCreators({ teamList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teams);