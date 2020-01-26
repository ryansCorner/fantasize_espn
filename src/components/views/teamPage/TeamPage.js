import React from 'react'
import { withRouter } from 'react-router-dom'
import TeamCard from '../../cards/TeamCard'
import { Container, Row, Col } from 'react-bootstrap'
import TeamTable from '../../tables/TeamTable'
import RosterTable from '../../tables/RosterTable'

const TeamPage = props => {
    return (
        <React.Fragment>
            {props.ready && (

                <Container>
                    <div className='team-card'>
                        <div className='team-card-container'>
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
                            </div>
                            <TeamTable
                                deviationFromProjection={props.deviationFromProjection}
                                team={props.team}
                                matchups={props.matchups}
                                deviationFromOptimizedTotal={props.deviationFromOptimizedTotal}
                            />
                            <Row>
                                <Col>
                            <RosterTable
                                scoringPeriodId={props.scoringPeriodId}
                                roster={props.roster}
                            />
                            </Col>
                            <Col>
                             <RosterTable
                                scoringPeriodId={props.scoringPeriodId}
                                roster={props.optimizedRoster}
                            />
                            </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            )}
        </React.Fragment>
    )
}
export default withRouter(TeamPage)