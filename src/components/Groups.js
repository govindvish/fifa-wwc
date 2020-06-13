import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { groupList } from '../store/actions/groupActions';
import GroupTable from './groupTable/GroupTable';


class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.groupList();
    }

    render() {
        return (
            <div className="container-fluid py-5">
                <h1 className="text-center font-weight-light pb-5">Groups</h1>
                <GroupTable  tableData={this.props.groupData.groupList} />
            </div>
        );
    }
}


const mapStateToProps = state => ({ groupData: state.group });

const mapDispatchToProps = dispatch => bindActionCreators({ groupList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Groups);