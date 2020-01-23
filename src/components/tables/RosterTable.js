import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const RosterTable = props => {
    console.log(props.roster)
    var roster = props.roster.entries
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <td>Player</td>
                        <td>Position Ranking</td>
                        <td>Overall Ranking</td>
                    </tr>
                </thead>
                <tbody>
                    {roster.map((player, idx) => {
                        return (
                            <tr>
                                <td> {player.playerPoolEntry.player.fullName}</td>
                                <td>{player.playerPoolEntry.ratings[0].positionalRanking}</td>
                                <td>{player.playerPoolEntry.ratings[0].totalRanking}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </React.Fragment>
    )
}
export default withRouter(RosterTable)