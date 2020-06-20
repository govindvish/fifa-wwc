import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { matchDetails } from '../store/actions/matchActions';
import Spinner from '../helpers/Spinner';
import MatchData from './matchData/MatchData';


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
        if (!Object.keys(this.props.matchData.matchDetails).length) {
            return (
                <Spinner />
            )
        }
        let match = this.props.matchData.matchDetails.map(item => new Date(item.datetime).toDateString());
        let dates = [...new Set(match.map(item => item))];
        let matchData = this.props.matchData.matchDetails;
        return (
            <div className="container-fluid py-5">
                <h1 className="text-center font-weight-light pb-5">Matches</h1>
                {
                    dates.map(data =>
                        <div className="col-md-12" key={data}>
                            <h5 className="font-weight-light p-3 text-white bg-date">{data}</h5>
                            <MatchData data={matchData} date={data} />
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({ matchData: state.match });

const mapDispatchToProps = dispatch => bindActionCreators({ matchDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Matches);