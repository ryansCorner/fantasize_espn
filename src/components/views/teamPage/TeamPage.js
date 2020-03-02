import React from 'react'
import { withRouter } from 'react-router-dom'
import TeamCard from '../../cards/TeamCard'
import { Container, Row, Col } from 'react-bootstrap'
import TeamTable from '../../tables/TeamTable'
import RosterTable from '../../tables/RosterTable'

const TeamPage = props => {
    console.log(props.team)
    return (
        <React.Fragment>
            {props.ready && (

                <Container>
                    {/* <Row>
                        <Col> */}


                    <div className='team-card'>
                        {/* <div className='team-card-container'> */}
                        <div className='team-card-header'>
                            <img className='team-card-img' src={props.team.logoURL} />
                            <h2>{props.team.name}</h2>
                            <select type='dropdown' name='scoringPeriodId' onChange={props.onWeekChange} value={props.scoringPeriodId}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option value='17'>17</option>

                            </select>
                            <div>
                                <h5>{props.team.wins}-{props.team.losses}-{props.team.record.ties}</h5>
                                <h5>({props.team.finalStandingsPosition} out of 10)</h5>
                            </div>
                            <div>
                                <h6>{props.team.transactions.acquisitions} total acquisitions </h6>
                            </div>
                            <div>
                                <h6>{props.team.transactions.moveToActive} total roster changes </h6>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                    <Container>

                        <Row>


                            <TeamTable
                                deviationFromProjection={props.deviationFromProjection}
                                team={props.team}
                                matchups={props.matchups}
                                deviationFromOptimizedTotal={props.deviationFromOptimizedTotal}
                            />
                        </Row>
                    </Container>
                    <Container>
                        <Row className='roster-table-row'>
                            <RosterTable
                                header='Actual Roster'
                                scoringPeriodId={props.scoringPeriodId}
                                roster={props.roster}
                            />
                            {/* <h1>Actual Lineup</h1> */}
                            <h1>VS.</h1>
                            {/* <h1>Optimized Roster</h1> */}
                            <RosterTable
                                header='Optimized Roster'

                                scoringPeriodId={props.scoringPeriodId}
                                roster={props.optimizedRoster}
                            />
                        </Row>
                    </Container>


                </Container>
            )}
        </React.Fragment>
    )
}
export default withRouter(TeamPage)