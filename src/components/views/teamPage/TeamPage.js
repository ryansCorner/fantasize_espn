import React from 'react'
import { withRouter } from 'react-router-dom'
import TeamCard from '../../cards/TeamCard'
import TeamTable from '../../tables/TeamTable'
import RosterTable from '../../tables/RosterTable'

const TeamPage = props => {
    console.log(props.team)
    return (
        <React.Fragment>
            {props.ready && (
                <React.Fragment>
                    <div className='team-card col-12 card mt-10'>
                        <div className='card-header'>
                            <div className='row'>

                                <img className='team-card-img' src={props.team.logoURL} />
                                <div className='row team-card-details col-2'>
                                    <h2>{props.team.name}</h2>

                                    <div>
                                        <h5>{props.team.wins}-{props.team.losses}-{props.team.record.ties}</h5>
                                        <h5>({props.team.finalStandingsPosition} out of 10)</h5>
                                    </div>
                                </div>
                                <div className=' col-3 offset-6 pull-right'>

                                    <div>
                                        <h6>{props.team.transactions.acquisitions} total acquisitions </h6>
                                    </div>
                                    <div>
                                        <h6>{props.team.transactions.moveToActive} total roster changes </h6>
                                    </div>
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
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <TeamTable
                            deviationFromProjection={props.deviationFromProjection}
                            team={props.team}
                            matchups={props.matchups}
                            deviationFromOptimizedTotal={props.deviationFromOptimizedTotal}
                        />
                    </div>
                    <div className='roster-table-row row'>
                        <RosterTable
                            header='Actual Roster'
                            scoringPeriodId={props.scoringPeriodId}
                            roster={props.roster}
                        />
                        <h1>VS.</h1>
                        <RosterTable
                            header='Optimized Roster'
                            scoringPeriodId={props.scoringPeriodId}
                            roster={props.optimizedRoster}
                        />
                    </div>
                </React.Fragment >
            )
            }
        </React.Fragment >
    )
}
export default withRouter(TeamPage)