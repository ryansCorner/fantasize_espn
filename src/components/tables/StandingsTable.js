import React from 'react'


const StandingsTable = props => {
    return (
        <React.Fragment>
            <table className='table standings-table'>
                <thead>
                    <tr>
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
                                <td key={idx} id={team.id} onClick={props.onTeamClick} className='name-and-logo'>
                                    <div ><img className='standings-table-logo' src={team.logoURL} /></div>  {team.name} ({team.abbreviation})
  </td>
                                <td>
                                    {(team.wins + " - " + team.losses)}
                                </td>
                                {/* <td>
                                    {team.record.gamesBack}
                                </td> */}
                                <td>
                                    {team.totalPointsScored}
                                </td>
                                <td>
                                    {team.regularSeasonPointsAgainst}
                                </td>



                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </React.Fragment>
    )
}
export default StandingsTable