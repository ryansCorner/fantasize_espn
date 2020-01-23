import React from "react"
import { Route } from "react-router-dom"
import HomePage from '../../views/homePage/HomePage'
import League from "../../../League"
import TeamPage from '../../views/teamPage/TeamPage'

const ContentRouter = (props) => {
    var state = props.state
    var onTeamClick = props.onTeamClick

    console.log('props.state: ', state)
    return (
        <React.Fragment>
            <div className="container-fluid">
                {/* /* components will be individual routers */
        /* Top left "logo" route */}
                {/* Top navbar routes */}

                <Route path="" component="" />
                <Route
                    exact path="/"
                    render={props => <HomePage {...props} leagueName={state.leagueName} teams={state.teams} onTeamClick={onTeamClick} />} />
                <Route path='/teamPage'
                    render={props => <TeamPage {...props} team={state.activeTeam} matchups={state.activeTeamMatchups} />} />
                <Route path='/league'
                    render={props => <League {...props} team={state.activeTeam} />} />

            </div>
        </React.Fragment>
    )
}
export default ContentRouter