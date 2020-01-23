import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './RosterTable.css'

const RosterTable = props => {
    console.log(props.roster)
    var roster = props.roster.entries

    return (
        <React.Fragment>
            <table className='roster-table'>
                <thead className='roster-table-head'>
                    <tr className='roster-table-head-row'>
                        <td className='roster-table-head-data'>Pos</td>
                        <td className='roster-table-head-data'>Player</td>
                        <td className='roster-table-head-data'>Projected Score</td>
                        <td className='roster-table-head-data'>Actual Score</td>
                        <td className='roster-table-head-data'>Deviation From Projection</td>
                        <td className='roster-table-head-data'>Season Average</td>
                        <td className='roster-table-head-data'>Deviation From Average</td>
                        <td className='roster-table-head-data'>Position Ranking</td>
                        <td className='roster-table-head-data'>Overall Ranking</td>
                    </tr>
                </thead>
                <tbody>
                    {roster.map((player, idx) => {
                        var projectedPoints = Math.round(player.playerPoolEntry.player.stats[3].appliedTotal * 10) / 10
                        var points = Math.round(player.playerPoolEntry.appliedStatTotal * 10) / 10
                        var i = player.playerPoolEntry.player.stats.length - 1
                        var seasonAverage = Math.round(player.playerPoolEntry.player.stats[i].appliedAverage * 10) / 10
                        var deviation = Math.round((points - projectedPoints) * 10) / 10
                        var deviationAvg = Math.round((points - seasonAverage) * 10) / 10

                        if (player.lineupSlotId == 0) {
                            var lineupSlot = 'QB'
                        }
                        if (player.lineupSlotId == 20) {
                            var lineupSlot = 'BENCH'
                        }
                        if (player.lineupSlotId == 2) {
                            var lineupSlot = 'RB'
                        }
                        if (player.lineupSlotId == 23) {
                            var lineupSlot = 'FLEX'
                        }
                        if (player.lineupSlotId == 6) {
                            var lineupSlot = 'TE'
                        }
                        if (player.lineupSlotId == 4) {
                            var lineupSlot = 'WR'
                        }
                        if (player.lineupSlotId == 17) {
                            var lineupSlot = 'K'
                        }
                        if (player.lineupSlotId == 16) {
                            var lineupSlot = 'D/ST'
                        }

                        return (
                            <tr className='roster-table-body-row'>
                                <td className='roster-table-body-data'>{lineupSlot}</td>
                                <td className='roster-table-body-data'> {player.playerPoolEntry.player.fullName}</td>
                                <td className='roster-table-body-data'>{projectedPoints}</td>
                                <td className='roster-table-body-data'>{points}</td>
                                <td className={'roster-table-body-data' + (deviationAvg > 0 ? ' positive' : ' negative')}>{deviation}</td>
                                <td className='roster-table-body-data'>{seasonAverage}</td>
                                <td className={'roster-table-body-data' + (deviationAvg > 0 ? ' positive' : ' negative')}>{deviationAvg}</td>
                                <td className='roster-table-body-data'>{player.playerPoolEntry.ratings[0].positionalRanking}</td>
                                <td className='roster-table-body-data'>{player.playerPoolEntry.ratings[0].totalRanking}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </React.Fragment>
    )
}
export default withRouter(RosterTable)