import React from 'react'

const MatchupTable = props => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
export default MatchupTable