import React from 'react'
import TeamTable from '../tables/TeamTable'

const TeamCard = props => {
    return (
        <React.Fragment>
            {props.teams.map((team, idx) => {

                return (
                    <div className='team-card' key={idx}>
                        <div className='team-card-container'>
                            <div className='team-card-header'>
                                <img className='team-card-img' src={team.logoURL} />
                                <h2>{team.name}</h2>
                            </div>
                            <TeamTable
                                team={team}
                                matchups={props.matchups}
                            />
                        </div>
                    </div>
                )
            })}

        </React.Fragment>
    )
}
export default TeamCard