import React from 'react'
import ESPN from './services/espnService'
import { Client, Team } from 'espn-fantasy-football-api/node-dev'
// import { Client } from './ESPN-Fantasy-Football-API/src/client/client'



// const myClient = new Client({ leagueId: 439532 })
class League extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leagueName: '',
            teams: [],
            seasonId: '',
            scoringPeriodId: '',
            leagueId: '',
            status: [],
            players: [],
            rosteredPlayers: [],
            freeAgents: [],
        }
        this.getLeague();
        this.getStandings()

    }

    getLeague = evt => {

        ESPN.getLeague(551382, this.onLeagueSuccess, this.onLeagueError)
        console.log('my client ')
        // return boxScores


    }

    onLeagueSuccess = evt => {
        var data = evt.data
        console.log('get League success', data)
        this.setState({
            ...this.state,
            leagueName: data.settings.name,
            teams: data.teams,
            seasonId: data.seasonId,
            scoringPeriodId: data.scoringPeriodId,
            status: data.status,
        })
    }

    onLeagueError = err => {
        console.log('get League error', err)
    }

    getStandings = evt => {
        ESPN.getStandings(551382, this.onStandingsSuccess, this.onStandingsrror)

    }

    onStandingsSuccess = evt => {
        console.log('standings success', evt)
        // this.onGetPlayers()
        this.onGetTeamStats()
    }

    onStandingsrror = err => {
        console.log('standings err', err)
    }

    onGetPlayers = evt => {
        ESPN.getPlayers(551382, this.getPlayersSuccess, this.getPlayersError)
    }

    getPlayersSuccess = evt => {
        console.log('get players success', evt)
        // this.onGetFreeAgents()
    }

    getPlayersError = err => {
        console.log('get players err ', err)
    }

    onGetFreeAgents = evt => {
        ESPN.getFreeAgents(551382, this.getFreeAgentsSuccess, this.getFreeAgentsError)
    }

    getFreeAgentsSuccess = evt => {
        console.log('get FreeAgents success', evt)
    }

    getFreeAgentsError = err => {
        console.log('get FreeAgents err ', err)
    }

    onGetTeamStats = evt => {
        ESPN.getTeamStats(13, 1, 551382, this.getTeamStatsSuccess, this.getTeamStatsError)
    }

    getTeamStatsSuccess = evt => {
        console.log('get TeamStats success', evt)
    }

    getTeamStatsError = err => {
        console.log('get TeamStats err ', err)
    }

    mapTeams = props => {
        var teamsMap = this.state.teams.map((team, idx) => {
            const abbrev = team.abbrev
            const id = team.id
            const location = team.location
            const nickname = team.nickname
            const owner = team.owner[0]
            return (
                <React.Fragment>
                    <div>
                        <h1>
                            {{ location }} {{ nickname }}
                        </h1>
                    </div>
                </React.Fragment>
            )
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>
                        {this.state.leagueName && (
                            this.state.teams.map((team, idx) => {
                                const abbrev = team.abbrev
                                const id = team.id
                                const location = team.location
                                const nickname = team.nickname
                                console.log(abbrev, id, location, nickname)
                                // const owner = team.owner.length - 1
                                return (
                                    <div key={idx}>
                                        <h1>
                                            {location} {nickname}
                                        </h1>
                                    </div>
                                )
                            }))}
                    </h1>
                </div>
            </React.Fragment>
        )
    }
}
export default League;

