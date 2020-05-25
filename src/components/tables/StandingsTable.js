import React from 'react'
import { withRouter, Link } from 'react-router-dom'


const StandingsTable = props => {
    return (
        <React.Fragment>
            <table className='table standings-table'>
                <thead>
                    <tr>
                        <th>
                            Rank
                        </th>
                        <th>
                            Team
                                </th>
                        <th>
                            Record
                                </th>
                        {/* <th>
                            Games Back
                                </th> */}
                        <th>
                            Points For
                                </th>
                        <th>
                            Points Against
                                </th>
                    </tr>

                </thead>
                <tbody>
                    {props.teams.map((team, idx) => {
                        // console.log(team)
                        return (
                            <tr key={idx} id={team.id} >
                                <td>{team.finalStandingsPosition}</td>
                                <Link to={process.env.PUBLIC_URL + '/teamPage'}>
                                    <td key={idx}
                                        id={team.id}
                                        onClick={props.onTeamClick}
                                        className='name-and-logo'>
                                        <div >
                                            <img className='standings-table-logo' src={team.logoURL} />
                                        </div>
                                        {team.name} ({team.abbreviation})
                                 </td>
                                </Link>
                                <td>
                                    {(team.wins + " - " + team.losses)}
                                </td>
                                {/* <td>
                                    {team.record.gamesBack}
                                </td> */}
                                <td>
                                    {team.totalPointsFor}
                                </td>
                                <td>
                                    {team.totalPointsAgainst}
                                </td>



                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </React.Fragment>
    )
}
export default withRouter(StandingsTable)