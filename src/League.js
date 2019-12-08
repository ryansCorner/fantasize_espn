import React, { useMemo, useState, useEffect } from 'react'
import ESPN from './services/espnService'
import { Client, Team } from 'espn-fantasy-football-api/node-dev'
// import Table from './components/Table'
import ReactDataGrid from 'react-data-grid'
import { Toolbar, Data, Filters } from "react-data-grid-addons";

const {
    NumericFilter,
    AutoCompleteFilter,
    MultiSelectFilter,
    SingleSelectFilter
} = Filters;

const selectors = Data.Selectors;


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
            schedule: [],
            matchupTableColumns: [
                { key: 'week', name: 'Wk', editable: false },
                { key: 'awayTeam', name: 'AWAY', editable: false },
                { key: 'homeTeam', name: 'HOME', editable: false },
                { key: 'awayScore', name: 'Away Score', editable: false },
                { key: 'homeScore', name: 'Home Score', editable: false },
                { key: 'winner', name: 'Winner', editable: false },

            ],


        }
        this.getStandings()

    }

    // handleFilterChange = filter => filters => {
    //     const newFilters = { ...filters };
    //     if (filter.filterTerm) {
    //         newFilters[filter.column.key] = filter;
    //     } else {
    //         delete newFilters[filter.column.key];
    //     }
    //     return newFilters;
    // };

    // getValidFilterValues = (rows, columnId) => {
    //     return rows
    //         .map(r => r[columnId])
    //         .filter((item, i, a) => {
    //             return i === a.indexOf(item);
    //         });
    // }

    // getRows = (rows, filters) => {
    //     return selectors.getRows({ rows, filters });
    // }


    mapTeams = (team) => {
        // console.log(team)
        var teamName = [team.location, team.nickname].join(' ')
        var id = team.id
        var abbrev = team.abbrev
        var owner = team.owner[0]
        return teamName, id, abbrev, owner

    }


    getStandings = evt => {
        ESPN.getStandings(551382, this.onStandingsSuccess, this.onStandingsrror)

    }

    onStandingsSuccess = evt => {
        console.log('standings success', evt)
        var leagueName = evt.settings.name
        var seasonId = evt.id
        var scoringPeriodId = evt.scoringPeriodId

        var teams = evt.teams.map((team, idx) => {
            var teamName = [team.location, team.nickname].join(' ')
            var id = team.id
            var abbrev = team.abbrev
            var owner = team.owners[0]
            var logo = team.logo
            var totalPointsFor = team.points
            var record = team.record.overall
            return {
                'id': id,
                'teamName': teamName,
                'abbrev': abbrev,
                'owner': owner,
                [id]: teamName,
                'logo': logo,
                'totalPointsFor': totalPointsFor,
                'record': record,
            }

        })
        this.setState({
            ...this.state,
            leagueName: leagueName,
            teams: teams,
            seasonId: seasonId,
            scoringPeriodId: scoringPeriodId,

        })
        this.onGetMatchupStats()

        // this.onGetPlayers()
        // this.onGetTeamStats()
    }

    onStandingsrror = err => {
        console.log('standings err', err)
    }

    onGetPlayers = evt => {
        ESPN.getPlayers(551382, this.getPlayersSuccess, this.getPlayersError)
    }

    getPlayersSuccess = evt => {
        // console.log('get players success', evt)
        // this.onGetFreeAgents()
    }

    getPlayersError = err => {
        console.log('get players err ', err)
    }

    onGetFreeAgents = evt => {
        ESPN.getFreeAgents(551382, this.getFreeAgentsSuccess, this.getFreeAgentsError)
    }

    getFreeAgentsSuccess = evt => {
        // console.log('get FreeAgents success', evt)
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

    onGetMatchupStats = evt => {
        ESPN.getMatchupStats(13, 1, 551382, this.getMatchupStatsSuccess, this.getMatchupStatsError)
    }

    getMatchupStatsSuccess = evt => {

        console.log('matchup succcesssssssss', evt)

        var state = this.state.teams
        var matchups = evt.schedule.map((matchup, idx) => {
            var homeAway = []

            for (const [key, value] of Object.entries(this.state.teams)) {
                if (value.id === matchup.home.teamId) {
                    var homeTeam = value.teamName
                }
                if (value.id === matchup.away.teamId) {
                    var awayTeam = value.teamName
                }
            }

            var week = matchup.matchupPeriodId
            var homeTeam = homeTeam
            var homeScore = matchup.home.totalPoints
            var awayTeam = awayTeam
            var awayScore = matchup.away.totalPoints
            var winner = (matchup.winner === "HOME") ? homeTeam : awayTeam
            console.log(matchup.winner, winner)
            return {
                'week': week,
                'homeTeam': homeTeam,
                'homeScore': homeScore,
                'awayTeam': awayTeam,
                'awayScore': awayScore,
                'winner': winner,
            }

        })
        this.setState({
            ...this.state,
            members: evt.members,
            schedule: matchups,
            seasonId: evt.seasonId,
            status: evt.status,
        })
    }

    getMatchupStatsError = err => {
        console.log('get MatchupStats err ', err)
    }

    onTeamClick = evt => {
        var target = evt.target.id
        var value = evt.value
        console.log('team clicked', this.state)
    }


    render() {
        console.log('state rendered', this.state)

        return (
            <React.Fragment>
                <div>
                    <h1>
                        {this.state.leagueName.toUpperCase()} STANDINGS
                    </h1>
                    <table className="standingsTable">
                        <thead>
                            <tr>
                                <th>
                                    Team
                                </th>
                                <th>
                                    Points For
                                </th>
                                <th>
                                    Points Against
                                </th>
                                <th>
                                    Record
                                </th>
                                <th>
                                    Games Back
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.leagueName && (
                                this.state.teams.map((team, idx) => {

                                    return (
                                        <tr key={idx} id={team.id} >
                                            <td key={idx} id={team.id} onClick={this.onTeamClick}>
                                                {team.teamName} ({team.abbrev})
                                            </td>
                                            <td>
                                                {team.record.pointsFor}
                                            </td>
                                            <td>
                                                {team.record.pointsAgainst}
                                            </td>
                                            <td>
                                                {(team.record.wins + " " + team.record.losses)}
                                            </td>
                                            <td>
                                                {team.record.gamesBack}
                                            </td>

                                        </tr>
                                    )
                                }))}

                        </tbody>
                    </table>


                    <h1>MATCHUPS </h1>
                    <table className='matchupsTable'>
                        <thead>
                            <tr>
                                <th id='week'>
                                    WEEK
                                    </th>
                                <th>
                                    Away Team
                                    </th>
                                <th>
                                    Away Score
                                    </th>
                                <th>
                                    Home Team
                                    </th>
                                <th>
                                    Home Score
                                    </th>

                                <th>
                                    Winner
                                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.schedule && (
                                this.state.schedule.map((matchup, idx) => {
                                    const week = matchup.week
                                    const winner = matchup.winner
                                    const homeTeam = matchup.homeTeam
                                    const awayTeam = matchup.awayTeam
                                    const homeScore = matchup.homeScore
                                    const awayScore = matchup.awayScore
                                    return (
                                        <tr key={idx}>
                                            <td id='week'>{week}</td>
                                            <td className={homeScore > awayScore ? 'winner' : 'loser'}>{homeTeam}</td>
                                            <td className={homeScore > awayScore ? 'winner' : 'loser'}>{homeScore}</td>
                                            <td className={homeScore < awayScore ? 'winner' : 'loser'}>{awayTeam}</td>
                                            <td className={homeScore < awayScore ? 'winner' : 'loser'}>{awayScore}</td>
                                            <td>{winner}</td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </React.Fragment >
        )
    }
}
export default League;

