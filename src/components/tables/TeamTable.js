import React from 'react'

const TeamTable = props => {
    return (
        <React.Fragment>
            <div className=''>
                <table className='table team-table'>
                    <tbody>
                        <tr>
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
                        <tr>
                            <h3>Outcome</h3><p>True Record</p>
                            {props.matchups.map((matchup, idx) => {
                                return (
                                    <td>{matchup.winner}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <h3>Deviation from Projection</h3>
<td>{props.deviationFromProjection}</td>
                        </tr>
                        <tr>
                            <h3>Points Away from Optimal Lineup</h3>
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
        </React.Fragment>
    )
}
export default TeamTable