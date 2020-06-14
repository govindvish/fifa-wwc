import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { matchDetails } from '../store/actions/matchActions'


class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.matchDetails();
    }

     

    render() {
        const matches = this.props.matchData.matchDetails;
        // console.log(this.props.matchData);
    
        if(Object.keys(matches).length !== 0){
            matches.sort((a,b) => {
                return new Date(a.last_event_update_at).getTime() - new Date(b.last_event_update_at).getTime();
            })
            console.log(matches);
        }
        return (
            <div className="container-fluid py-5">
                <h1 className="text-center font-weight-light pb-5">Matches</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({ matchData: state.match });

const mapDispatchToProps = dispatch => bindActionCreators({ matchDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Matches);