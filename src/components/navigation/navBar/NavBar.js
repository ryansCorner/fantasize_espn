import React from 'react'
import { withRouter, Link } from "react-router-dom";
import './NavBar.css'



const NavBar = props => {

    return (
        <React.Fragment>
            <div className="head-padding">
                <div className="header-area blacknav">
                    <div id="sticky-header" className="main-header-area">
                        <div className="container-fluid p-0">
                            <div className="row align-items-center no-gutters">
                                <div className="col-xl-2 col-lg-2">
                                    <Link to={process.env.PUBLIC_URL + '/'}>
                                        <img
                                            src="https://www.shareicon.net/data/256x256/2016/04/22/753659_legend_512x512.png"
                                            width="45"
                                            height="45"
                                            className="d-inline-block align-top"
                                            alt="HubLink logo"
                                        />
                                    </Link>
                                </div>
                                <div className="col-xl-8 col-lg-8">
                                    <div className="main-menu  d-none d-lg-block text-center">
                                        <nav>
                                            <ul id="navigation">
                                                <li>
                                                    <a className="active" href={process.env.PUBLIC_URL + '/'}>Fantasize Home</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-2 d-none d-lg-block">
                                    <div className="log_chat_area d-flex align-items-end">
                                        <a href="/login" data-scroll-nav="0" className="say_hi log-hed">Log In</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Navbar collapseOnSelect expand="lg" bg='fantasize' variant="fantasize">
                <Navbar.Brand href={process.env.PUBLIC_URL + '/'}>HOME</Navbar.Brand>
                        <NavDropdown title="Teams" id="collasible-nav-dropdown">
                            {props.teams && props.teams.map((team, idx) => {
                                return (

                                    <NavDropdown.Item href={process.env.PUBLIC_URL + "/teamPage"}
                                        key={idx}
                                        id={team.id}
                                        onClick={props.onTeamClick}
                                    >  {team.name} ({team.abbreviation})</NavDropdown.Item>

                                )
                            })}
            </Navbar> */}
        </React.Fragment>
    )
}

export default withRouter(NavBar)