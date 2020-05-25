import React from 'react'

const TeamTable = props => {
    return (
        <React.Fragment>
            <div className='col-12'>

                <table className='table team-table '>
                    <tbody>
                        <tr className='roster-table-head-row'>
                            <td><p>Week</p></td>
                            <td><p>1</p></td>
                            <td><p>2</p></td>
                            <td><p>3</p></td>
                            <td><p>4</p></td>
                            <td><p>5</p></td>
                            <td><p>6</p></td>
                            <td><p>7</p></td>
                            <td><p>8</p></td>
                            <td><p>9</p></td>
                            <td><p>10</p></td>
                            <td><p>11</p></td>
                            <td><p>12</p></td>
                            <td><p>13</p></td>
                            <td><p>14-15</p></td>
                            <td><p>16-17</p></td>
                            <td><p>Total</p></td>
                        </tr>
                        <tr className='roster-table-head-row'>
                            <td>Outcome</td>
                            {props.matchups.map((matchup, idx) => {
                                console.log('matchups: ', matchup)
                                return (
                                    <td className={'matchup-table-outcome' + (matchup.winner === props.team.abbreviation ? '-winner' : '-loser')}>
                                        <span id={(matchup.awayScore > matchup.homeScore) ? 'winner' : ''}>
                                            {matchup.awayAbbrev} {matchup.awayScore}
                                        </span>
                                        <br />
                                        <span id={matchup.homeScore > matchup.awayScore ? 'winner' : ''}>
                                            {matchup.homeAbbrev} {matchup.homeScore}
                                        </span>
                                    </td>
                                )
                            })}
                        </tr>
                        <tr className='roster-table-head-row'>
                            <td>Deviation from Projection</td>
                            <td>{props.deviationFromProjection}</td>
                        </tr>
                        <tr className='roster-table-head-row'>
                            <td>Points Away from Optimal Lineup</td>
                            <td>{props.deviationFromOptimizedTotal}</td>
                        </tr>

                        {/* <tr>
                            <h3> Opponent's Deviation from Projection</h3>

                        </tr> */}
                    </tbody>
                    <tbody>

                    </tbody>

                </table>
            </div>
        </React.Fragment >
    )
}
export default TeamTable