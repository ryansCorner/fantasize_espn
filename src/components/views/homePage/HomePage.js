import React from 'react'
import { withRouter } from "react-router-dom"
import StandingsTable from '../../tables/StandingsTable'


const HomePage = props => {
    return (
        <React.Fragment>
            <div className='homepage-container'>
                <div className='homepage-header'>

                    <h1>Welcome to {props.leagueName}</h1>

                    <h2>Final Season Standings</h2>
                </div>
                <StandingsTable
                    teams={props.teams}
                    onTeamClick={props.onTeamClick}
                />
            </div>
        </React.Fragment>
    )
}

export default withRouter(HomePage)
