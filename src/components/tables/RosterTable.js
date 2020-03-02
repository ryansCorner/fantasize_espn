import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './RosterTable.css'


const RosterTable = props => {
    var roster = props.roster

    return (
        <React.Fragment>
            <div className="rosterTableContainer">
                <h1 className='roster-title'>{props.header}</h1>
                <table className='roster-table'>
                    <thead className='roster-table-head'>
                        <tr className='roster-table-head-row'>
                            <td className='roster-table-head-data'>Pos</td>
                            <td className='roster-table-head-data'>Player(rk)</td>
                            <td className='roster-table-head-data bold'>Actual Score</td>
                            <td className='roster-table-head-data'>Projected Score</td>
                            <td className='roster-table-head-data'>Deviation From Projection</td>
                            {/* <td className='roster-table-head-data'>Position Ranking</td>
                        <td className='roster-table-head-data'>Overall Ranking</td> */}
                        </tr>
                    </thead>
                    <tbody>
                        {roster.map((player, idx) => {
                            // var projectedPoints = Math.round(player.playerPoolEntry.player.stats[2].appliedTotal * 10) / 10
                            var playerStats = player.playerPoolEntry.player.stats
                            for (const [key, value] of Object.entries(playerStats)) {
                                if (value.statSourceId == 1 && value.statSplitTypeId == 1 && value.scoringPeriodId == props.scoringPeriodId) {
                                    var projectedPoints = Math.round(value.appliedTotal * 10) / 10
                                    break;
                                }


                            }
                            for (const [key, value] of Object.entries(playerStats)) {
                                if (value.statSourceId == 0 && value.statSplitTypeId == 1 && value.scoringPeriodId == props.scoringPeriodId) {
                                    var points = Math.round(value.appliedTotal * 10) / 10
                                    break;
                                }
                            }
                            if (points == null) {
                                points = 0
                                player.playerPoolEntry.player.fullName = `${player.playerPoolEntry.player.fullName} *BYE*`

                            }
                            // var points = Math.round(player.playerPoolEntry.appliedStatTotal * 10) / 10
                            var i = player.playerPoolEntry.player.stats.length - 1
                            var seasonAverage = Math.round(player.playerPoolEntry.player.stats[i].appliedAverage * 10) / 10
                            var deviation = Math.round((points - projectedPoints) * 10) / 10
                            var deviationAvg = Math.round((points - seasonAverage) * 10) / 10

                            var projectedTotal = 0

                            if (player.starter) {
                                projectedTotal += projectedTotal
                            }
                            return (
                                <tr className={'roster-table-body-row' + (player.highlight ? ' highlight' : '') + (player.lowlight ? ' lowlight' : '')}>
                                    <td className='roster-table-body-data'>{player.lineupSlot}</td>
                                    <td className='roster-table-body-data'> {player.playerPoolEntry.player.fullName} ({player.playerPoolEntry.ratings[0].positionalRanking})</td>
                                    <td className='roster-table-body-data bold'>{points}</td>
                                    <td className='roster-table-body-data proj'>{projectedPoints}</td>
                                    <td className={'roster-table-body-data' + (deviation > 0 ? ' positive' : ' negative')}>{deviation}</td>
                                    {/* <td className='roster-table-body-data'>{player.playerPoolEntry.ratings[0].positionalRanking}</td>
                                <td className='roster-table-body-data'>{player.playerPoolEntry.ratings[0].totalRanking}</td> */}

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </React.Fragment>
    )
}
export default withRouter(RosterTable)