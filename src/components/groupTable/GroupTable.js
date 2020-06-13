import React from 'react';
import GroupTableBody from './GroupTableBody';
import Spinner from '../../helpers/Spinner';


function GroupTable(props) {
    if(!Object.keys(props.tableData).length) {
        return (
            <Spinner />
        )
    }
    return (
        (
            props.tableData.map(data => 
                <div className="col-md-12 table-responsive mb-5" key={data.id}>
                    <h4 className="font-weight-light mb-3">Group {data.letter}</h4>
                    <table className="table text-center group-table">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Matches Played</th>
                                <th>Won</th>
                                <th>Draw</th>
                                <th>Lost</th>
                                <th>Goals For</th>
                                <th>Goals Against</th>
                                <th>Goal Difference</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <GroupTableBody tableBodyData={data.ordered_teams} />
                    </table>
                </div>
            )
        )
    );
}

export default GroupTable;