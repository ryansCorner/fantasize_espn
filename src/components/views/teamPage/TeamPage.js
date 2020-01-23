import React from 'react'
import { withRouter } from 'react-router-dom'
import TeamCard from '../../cards/TeamCard'
import { Container, Row, Col } from 'react-bootstrap'
import TeamTable from '../../tables/TeamTable'
import RosterTable from '../../tables/RosterTable'

const TeamPage = props => {
    console.log('team page props: ', props)
    return (
        <React.Fragment>
            {props.ready && (

                <Container>
                    <div className='team-card'>
                        <div className='team-card-container'>
                            <div className='team-card-header'>
                                <img className='team-card-img' src={props.team.logoURL} />
                                <h2>{props.team.name}</h2>
                            </div>
                            <TeamTable
                                team={props.team}
                                matchups={props.matchups}
                            />
                            <RosterTable
                                roster={props.roster}
                            />
                        </div>
                    </div>
                </Container>
            )}
        </React.Fragment>
    )
}
export default withRouter(TeamPage)