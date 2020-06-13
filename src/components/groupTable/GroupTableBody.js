import React from 'react';


function GroupTableBody(props) {
    return (
        (
            props.tableBodyData.map(data => 
                <tbody key={data.id}>
                    <tr>
                        <td>{data.country}</td>
                        <td>{data.games_played}</td>
                        <td>{data.wins}</td>
                        <td>{data.draws}</td>
                        <td>{data.losses}</td>
                        <td>{data.goals_for}</td>
                        <td>{data.goals_against}</td>
                        <td>{data.goal_differential}</td>
                        <td>{data.points}</td>
                    </tr>
                </tbody>
            )
        )
    )
}

export default GroupTableBody;