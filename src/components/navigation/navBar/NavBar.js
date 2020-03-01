import React from 'react'
import { Navbar, Nav, FormControl, Button, Form, Col, Row, NavDropdown } from "react-bootstrap"
import { withRouter, Link } from "react-router-dom";
import './NavBar.css'



const NavBar = props => {

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg='fantasize' variant="fantasize">
                <Navbar.Brand href="/">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                        <NavDropdown title="Teams" id="collasible-nav-dropdown">
                            {props.teams && props.teams.map((team, idx) => {
                                return (

                                    <NavDropdown.Item href="/teamPage"
                                        key={idx}
                                        id={team.id}
                                        onClick={props.onTeamClick}
                                    >  {team.name} ({team.abbreviation})</NavDropdown.Item>

                                )
                            })}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default withRouter(NavBar)