import React from 'react';


function MatchData(props) {
    let matchData = props.data.filter(item => new Date(item.datetime).toDateString() === props.date);
    return (
        (
            matchData.map(data =>
                <div className="mb-3 bg-match" key={data.fifa_id}>
                    <div className="row text-center p-3">
                        <div className="col-md-2 text-left">
                            <p>{new Date(data.datetime).toLocaleTimeString().replace(/\//g, '-').replace(',', '')}</p>
                            <p>{data.stage_name}</p>
                            <p>{data.venue}</p>
                            <p>{data.location}</p>
                        </div>
                        <div className="col-md-10 m-auto">
                            <h3 className="font-weight-light">{data.home_team.country} {data.home_team.goals} - {data.away_team.goals} {data.away_team.country}</h3>
                        </div>
                    </div>
                </div>
            )
        )
    )
}

export default MatchData;