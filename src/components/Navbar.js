import React, {useState} from "react";

import {Button} from "./Button";
import {Link} from "react-router-dom";
import ReleasesDropdown from "./ReleasesDropdown";
import DeploymentsDropdown from "./DeploymentsDropdown";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [releasesDropdown, setReleasesDropdown] = useState(false);
    const [deploymentsDropdown, setDeploymentDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onReleasesMouseEnter = () => {
        if (window.innerWidth < 960) {
            setReleasesDropdown(false);
        } else {
            setReleasesDropdown(true);
        }
    };

    const onReleasesMouseLeave = () => {
        if (window.innerWidth < 960) {
            setReleasesDropdown(false);
        } else {
            setReleasesDropdown(false);
        }
    };

    const onDeploymentsMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDeploymentDropdown(false);
        } else {
            setDeploymentDropdown(true);
        }
    };

    const onDeploymentsLeave = () => {
        if (window.innerWidth < 960) {
            setDeploymentDropdown(false);
        } else {
            setDeploymentDropdown(false);
        }
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    Release Ops <i className="fab fa-firstdraft"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={onReleasesMouseEnter}
                        onMouseLeave={onReleasesMouseLeave}
                    >
                        <Link
                            to="/releases"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Releases <i className="fas fa-caret-down"/>
                        </Link>
                        {releasesDropdown && <ReleasesDropdown/>}
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={onDeploymentsMouseEnter}
                        onMouseLeave={onDeploymentsLeave}
                    >
                        <Link
                            to="/deployments"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Deployments <i className="fas fa-caret-down"/>
                        </Link>
                        {deploymentsDropdown && <DeploymentsDropdown/>}
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/sign-up"
                            className="nav-links-mobile"
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    );
}

export default Navbar;
