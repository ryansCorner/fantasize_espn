import React, { useMemo, useState, useEffect } from 'react'
import ESPN from './services/espnService'
import { Client } from 'espn-fantasy-football-api/node-dev'
// import Table from './components/Table'
import ReactDataGrid from 'react-data-grid'
import { Toolbar, Data, Filters } from "react-data-grid-addons";
import StandingsTable from './components/tables/StandingsTable'
import TeamCard from './components/cards/TeamCard';


const {
    NumericFilter,
    AutoCompleteFilter,
    MultiSelectFilter,
    SingleSelectFilter
} = Filters;

// const selectors = Data.Selectors;
// const myClient = new Client({ leagueId: 439532 })
// myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })
// let data;
// myClient.getBoxscoreForWeek({ seasonId: 2018, scoringPeriodId: 5, matchupPeriodId: 5 }).then((boxscores) => {
//     data = boxscores;
// });


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
            leagueInfo: '',
            teamsAtWeek: '',
            boxScoreForWeek: '',
            historicalScoreboard: '',



        }
        this.getStandings()
        this.getBoxScoreForWeek()
        this.getTeamsAtWeek()
        this.getLeagueInfo()
        this.getHistoricalScoreboardForWeek()
        this.getFreeAgents()


    }

    getStuff = evt => {
        var scoringPeriodId = 5

        ESPN.getStuff(scoringPeriodId, this.onStuffSuccess, this.onStuffError)
    }

    onStuffSuccess = evt => {
        console.log('Stuff success:', evt)

    }

    onStuffError = err => {
        console.log('Stuff errror', err)
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
        var name = [team.location, team.nickname].join(' ')
        var id = team.id
        var abbreviation = team.abbreviation
        var owner = team.owner[0]
        return name, id, abbreviation, owner

    }
    getBoxScoreForWeek = evt => {
        var scoringPeriodId = 9
        var matchupPeriodId = 9
        ESPN.getBoxScoreForWeek(scoringPeriodId, matchupPeriodId, this.onBoxScoreWeekSuccess, this.onBoxScoreWeekError)
    }

    onBoxScoreWeekSuccess = evt => {
        console.log("$$$$$$", evt)
        var matchups = evt.map((matchup, idx) => {
            for (const [key, value] of Object.entries(this.state.teamsAtWeek)) {
                if (value.id === matchup.homeTeamId) {
                    var homeTeamName = value.name
                }
                if (value.id === matchup.awayTeamId) {
                    var awayTeamName = value.name
                }
            }
            // var week = matchup.matchupPeriodId
            var homeTeam = homeTeamName
            var homeScore = matchup.homeScore
            var awayTeam = awayTeamName
            var awayScore = matchup.awayScore
            var winner = (awayScore < homeScore) ? homeTeam : awayTeam
            if (awayScore === homeScore) {
                var winner = 'TIE'
            }

            return {
                // 'week': week,
                'homeTeam': homeTeam,
                'homeScore': homeScore,
                'awayTeam': awayTeam,
                'awayScore': awayScore,
                'winner': winner,
            }
        })

        this.setState({
            ...this.state,
            boxScoreForWeek: matchups,
        })
    }

    onBoxScoreWeekError = err => {
        console.log('boxScooore errror', err)
    }

    getTeamsAtWeek = evt => {
        var scoringPeriodId = 5

        ESPN.getTeamsAtWeek(scoringPeriodId, this.onTeamsAtWeekSuccess, this.onTeamsAtWeekError)
    }

    onTeamsAtWeekSuccess = evt => {
        console.log('TeamsAtWeek success:', evt)
        this.setState({
            ...this.state,
            teamsAtWeek: evt,
        })
    }

    onTeamsAtWeekError = err => {
        console.log('TeamsAtWeek errror', err)
    }

    getLeagueInfo = evt => {
        ESPN.getLeagueInfo(this.onLeagueInfoSuccess, this.onLeagueInfoError)
    }

    onLeagueInfoSuccess = evt => {
        console.log('LeagueInfo success:', evt)
        this.setState({
            ...this.state,
            leagueInfo: evt,
        })
    }

    onLeagueInfoError = err => {
        console.log('LeagueInfo errror', err)
    }

    getFreeAgents = evt => {
        var scoringPeriodId = 5

        ESPN.getFreeAgents(scoringPeriodId, this.onFreeAgentsSuccess, this.onFreeAgentsError)
    }

    onFreeAgentsSuccess = evt => {
        console.log('FreeAgents success:', evt)
        this.setState({
            ...this.state,
            freeAgents: evt,
        })
    }

    onFreeAgentsError = err => {
        console.log('FreeAgents errror', err)
    }

    getHistoricalScoreboardForWeek = evt => {
        var scoringPeriodId = 5
        var matchupPeriodId = 5
        ESPN.getHistoricalScoreboardForWeek(scoringPeriodId, matchupPeriodId, this.onHistoricalScoreboardForWeekSuccess, this.onHistoricalScoreboardForWeekError)
    }

    onHistoricalScoreboardForWeekSuccess = evt => {
        console.log('HistoricalScoreboardForWeek success:', evt)
        this.setState({
            ...this.state,
            historicalScoreboard: evt,
        })
    }

    onHistoricalScoreboardForWeekError = err => {
        console.log('HistoricalScoreboardForWeek errror', err)
    }

    getStandings = evt => {
        ESPN.getStandings(551382, this.onStandingsSuccess, this.onStandingsrror)

    }

    onStandingsSuccess = evt => {
        // console.log('standings success', evt)
        var leagueName = evt.settings.name
        var seasonId = evt.id
        var scoringPeriodId = evt.scoringPeriodId

        var teams = evt.teams.map((team, idx) => {
            var name = [team.location, team.nickname].join(' ')
            var id = team.id
            var abbreviation = team.abbrev
            var owner = team.owners[0]
            var logoURL = team.logo
            var totalPointsScored = Math.round(team.points * 10) / 10
            var record = team.record.overall
            var wins = team.record.overall.wins
            var losses = team.record.overall.losses
            var regularSeasonPointsAgainst = Math.round(team.record.overall.pointsAgainst * 10) / 10

            return {
                'id': id,
                'name': name,
                'abbreviation': abbreviation,
                'owner': owner,
                [id]: name,
                'logoURL': logoURL,
                'totalPointsScored': totalPointsScored,
                'regularSeasonPointsAgainst': regularSeasonPointsAgainst,
                'record': record,
                'wins': wins,
                'losses': losses,
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

    // onGetFreeAgents = evt => {
    //     ESPN.getFreeAgents(551382, this.getFreeAgentsSuccess, this.getFreeAgentsError)
    // }

    // getFreeAgentsSuccess = evt => {
    //     // console.log('get FreeAgents success', evt)
    // }

    // getFreeAgentsError = err => {
    //     console.log('get FreeAgents err ', err)
    // }

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
                    var homeTeam = value.name
                }
                if (value.id === matchup.away.teamId) {
                    var awayTeam = value.name
                }
            }

            var week = matchup.matchupPeriodId
            var homeTeam = homeTeam
            var homeScore = Math.round(matchup.home.totalPoints * 10) / 10
            var awayTeam = awayTeam
            var awayScore = Math.round(matchup.away.totalPoints * 10) / 10
            var winner = (matchup.winner === "HOME") ? homeTeam : awayTeam
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
        // console.log('state rendered', this.state)

        return (
            <React.Fragment>
                <div>
                    {(this.state.teamsAtWeek && this.state.boxScoreForWeek) && (
                        <div className='team-card-flex'>

                            <TeamCard
                                teams={this.state.teamsAtWeek}
                                matchups={this.state.boxScoreForWeek}
                            />
                        </div>
                    )}
                    {this.state.leagueInfo && (

                        <h1>
                            {this.state.leagueInfo.name.toUpperCase()} STANDINGS
                    </h1>
                    )}
                    {this.state.teamsAtWeek && (

                        <StandingsTable
                            teams={this.state.teamsAtWeek}
                        />
                    )}

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
                            {this.state.boxScoreForWeek && (
                                this.state.boxScoreForWeek.map((matchup, idx) => {
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

                    {this.state.leagueName && (
                        <div className='team-card-flex'>

                            <TeamCard
                                teams={this.state.teams}
                                matchups={this.state.schedule}
                            />
                        </div>
                    )}
                    <h1>
                        {this.state.leagueName.toUpperCase()} STANDINGS
                    </h1>
                    {this.state.leagueName && (

                        <StandingsTable
                            teams={this.state.teams}
                        />
                    )}


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

