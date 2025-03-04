import React from 'react';
import socialMedia from "../../assets/social-media.png";
import { Link } from 'react-router';
import NavBar from '../molecules/NavBar';

const Header = () => {
    return (
        <header>
            <Link to="/" className="header-link">
                <img id="banner-header" src={socialMedia} alt="banner social media"/>
            </Link>
            <NavBar/>
        </header>
    );
};

export default Header;