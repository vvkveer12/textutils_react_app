import React from "react";
import PropTypes from 'prop-types';
function Navbar(props) {
    return (

        <React.Fragment>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <p className="navbar-brand">{props.title}</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' :'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'DarkMode' : 'LightMode'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>


    );
}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Write Your title here'
}