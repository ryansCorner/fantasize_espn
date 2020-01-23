import React from 'react'
import { Col, Row, Container, Nav } from "react-bootstrap"
import { withRouter } from 'react-router-dom'
import ESPN from '../../../services/espnService'
import ContentRouter from '../../navigation/contentRouter/ContentRouter'
import NavBar from '../../navigation/navBar/NavBar'
import Footer from '../../footer/Footer'




class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leagueName: '',
            scoringPeriodId: '1',
            teams: '',
            activeTeam: '',


        }
    }

    onTeamClick = evt => {
        ESPN.getMatchupStats(this.state.scoringPeriodId, evt.target.id, 551382, this.getMatchupStatsSuccess, this.getMatchupStatsError)
        ESPN.getRoster(this.state.scoringPeriodId, evt.target.id, 551382, this.getRosterSuccess, this.getRosterError)
        ESPN.myTeam(this.state.scoringPeriodId, evt.target.id, 551382, this.getMyTeamSuccess, this.getMyTeamError)
        var target = evt.target.id
        var value = evt.target.value
        var teams = this.state.teams
        var matchups = this.state.matchups

        function getTeamClicked(a) {
            var c = teams
            var target = a
            for (var i = 0; i < teams.length; i++) {
                if (target == teams[i].id) {

                    return teams[i]
                }
            }
        }

        function getTeamMatchups(a) {
            var c = matchups
            var target = a
            var teamMatchups = []
            for (var ii = 0; ii < matchups.length; ii++) {
                if (target == matchups[ii].away.teamId || target == matchups[ii].home.teamId) {
                    teamMatchups.push(matchups[ii])
                }
            }
            return teamMatchups
        }

        this.setState({
            ...this.state,
            activeTeam: getTeamClicked(target),
            activeTeamMatchups: getTeamMatchups(target),
        })
    }

    getRosterSuccess = evt => {
        console.log('my teams roster', evt)
    }

    getRosterError = err => {
        console.log('get roster error: ', err)
    }

    getMyTeamSuccess = evt => {
        console.log(" MY TEAM STATS : ", evt)
    }

    getMyTeamError = err => {
        console.log('MY TEAM FAILED : ', err)
    }

    onGetMatchupStats = evt => {
        ESPN.getMatchupStats(13, 1, 551382, this.getMatchupStatsSuccess, this.getMatchupStatsError)
    }

    getMatchupStatsSuccess = evt => {
        var teams = this.state.teams
        console.log(' public matchup succcesssssssss', evt)

        var matchups = evt.data.schedule.map((matchup, idx) => {
            var homeAway = []

            for (const [key, value] of Object.entries(this.state.teams)) {
                if (value.id === matchup.home.teamId) {
                    var homeId = value.id
                    var homeTeam = value.name
                }
                if (value.id === matchup.away.teamId) {
                    var awayId = value.id

                    var awayTeam = value.name
                }
            }

            var homeId = homeId
            var awayId = awayId
            var week = matchup.matchupPeriodId
            var homeTeam = homeTeam
            var homeScore = Math.round(matchup.home.totalPoints * 10) / 10
            var awayTeam = awayTeam
            var awayScore = Math.round(matchup.away.totalPoints * 10) / 10
            var winner = (matchup.winner === "HOME") ? homeTeam : awayTeam

            return {
                'homeId': homeId,
                'awayId': awayId,
                'week': week,
                'homeTeam': homeTeam,
                'homeScore': homeScore,
                'awayTeam': awayTeam,
                'awayScore': awayScore,
                'winner': winner,
            }

        })


        function getTeamMatchups(a, b) {
            var matchups = a
            var target = b
            var teamMatchups = []
            for (var ii = 0; ii < matchups.length; ii++) {
                if (target == matchups[ii].awayId || target == matchups[ii].homeId) {
                    teamMatchups.push(matchups[ii])
                }
            }
            return teamMatchups
        }
        this.setState({
            ...this.state,
            members: evt.members,
            schedule: matchups,
            activeTeamMatchups: getTeamMatchups(matchups, this.state.activeTeam.id),
            seasonId: evt.seasonId,
            status: evt.status,
        })
    }

    getMatchupStatsError = err => {
        console.log('get MatchupStats err ', err)
    }

    onGetLeagueInfoSuccess = evt => {
        console.log('league info: ', evt)
        this.setState({
            ...this.state,
            leagueName: evt.name
        })
    }

    onGetLeagueInfoError = err => {
        console.log('could not get league info: ', err)
    }

    onTeamsAtWeekSuccess = evt => {
        console.log('da league TeamsAtWeek success:', evt)
        var teams = evt.map((team, idx) => {
            return {
                idx: idx,
                name: team.name,
                abbreviation: team.abbreviation,
                id: team.id,
                logo: team.logoURL,
                totalPointsFor: team.totalPointsScored,
                totalPointsAgainst: team.regularSeasonPointsAgainst,
                winningPercentage: team.winningPercentage,
                finalStandingsPosition: team.finalStandingsPosition,
                playoffSeed: team.playoffSeed,
                rosterAtWeek: team.roster,
                wins: team.wins,
                losses: team.losses,
            }

        })

        function compare(a, b) {
            const teamA = a.finalStandingsPosition
            const teamB = b.finalStandingsPosition
            let comparison = 0;
            if (teamA > teamB) {
                comparison = 1;
            } else if (teamA < teamB) {
                comparison = -1;
            }
            return comparison;

        }

        var sortedTeams = teams.sort(compare)
        this.setState({
            ...this.state,
            teams: sortedTeams,
        })
    }

    onTeamsAtWeekError = err => {
        console.log('TeamsAtWeek errror', err)
    }

    onStandingsSuccess = evt => {
        console.log('public standings success', evt)
        var leagueName = evt.settings.name
        var seasonId = evt.id
        var scoringPeriodId = evt.scoringPeriodId

        var teams = evt.teams.map((team, idx) => {
            var name = [team.location, team.nickname].join(' ')
            var id = team.id
            var abbreviation = team.abbrev
            var owner = team.owners[0]
            var logoURL = team.logo
            var totalPointsFor = Math.round(team.points * 10) / 10
            var record = team.record.overall
            var wins = team.record.overall.wins
            var losses = team.record.overall.losses
            var totalPointsAgainst = Math.round(team.record.overall.pointsAgainst * 10) / 10
            var finalStandingsPosition = team.rankCalculatedFinal
            var playoffSeed = team.playoffSeed
            var roster = team.roster
            var transactions = team.transactionCounter


            return {
                'id': id,
                'name': name,
                'abbreviation': abbreviation,
                'owner': owner,
                [id]: name,
                'logoURL': logoURL,
                'totalPointsFor': totalPointsFor,
                'totalPointsAgainst': totalPointsAgainst,
                'record': record,
                'wins': wins,
                'losses': losses,
                'finalStandingsPosition': finalStandingsPosition,
                'playoffSeed': playoffSeed,
                'roster': roster,
                'transactions': transactions,

            }
        })

        function compare(a, b) {
            const teamA = a.finalStandingsPosition
            const teamB = b.finalStandingsPosition
            let comparison = 0;
            if (teamA > teamB) {
                comparison = 1;
            } else if (teamA < teamB) {
                comparison = -1;
            }
            return comparison;

        }

        var sortedTeams = teams.sort(compare)

        this.setState({
            ...this.state,
            leagueName: leagueName,
            teams: sortedTeams,
            seasonId: seasonId,
            scoringPeriodId: scoringPeriodId,
            matchups: evt.schedule

        })
        // this.onGetMatchupStats()

        // this.onGetPlayers()
        // this.onGetTeamStats()
    }

    onStandingsrror = err => {
        console.log('standings err', err)
    }
    onBoxScoreSuccess = evt => {
        console.log('box score success', evt)
    }
    onBoxScoreError = err => {
        console.log('box score error', err)
    }

    componentDidMount() {
        // ESPN.getTeamsAtWeek(this.state.scoringPeriodId, this.onTeamsAtWeekSuccess, this.onTeamsAtWeekError)
        // ESPN.getLeagueInfo(this.onGetLeagueInfoSuccess, this.onGetLeagueInfoError)
        ESPN.getStandings(551382, this.onStandingsSuccess, this.onStandingsrror)
        ESPN.boxScore(this.state.scoringPeriodId, 551382, this.onBoxScoreSuccess, this.onBoxScoreError)

    }

    render() {
        console.log('this.state', this.state)
        return (
            <React.Fragment>
                <Container fluid className='layout-container-0padding'>
                    <div className="layout-inner" >

                        <div className="layout-navbar sticky-top">

                            <Row className="navbar-row" >
                                <Col className='nav-container-col'>
                                    <header>
                                        <NavBar

                                        />
                                    </header>
                                </Col>
                            </Row>
                        </div>
                        <div className="layout-container">

                            <div className="layout-content">
                                <div className="container-fluid">
                                    <Row>
                                        {(this.state.leagueName && this.state.teams) && (
                                            <ContentRouter
                                                state={this.state}
                                                onTeamClick={this.onTeamClick}
                                                activeTeam={this.state.activeTeam}

                                            />
                                        )}
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <header>
                                        <Footer />
                                    </header>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default withRouter(Layout)