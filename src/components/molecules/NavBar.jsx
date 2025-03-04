import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell, faHouse, faRightFromBracket, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../config/AuthProvider.jsx";
import "./navBar.scss";
import Button from "../atoms/Button.jsx";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hideMenu = () => setIsOpen(false);
    const {isLogged, logout} = useContext(AuthContext);

    return (
        <div className="navBarContainer">
            <nav id="navBar" className={isOpen ? 'isOpen' : ''}>
                {/* <button
                    id="burger"
                    onClick={() => setIsOpen(!isOpen)}
                    onBlur={hideMenu}
                >
                    <FontAwesomeIcon icon={faBars}/>
                </button> */}
                <Link to="/" id="homeButton">
                    <button className="navBarLink" aria-label="Button to navigate to home page"><FontAwesomeIcon icon={faHouse}/></button>
                </Link>
                <div id="links">
                    <button id="closeMenu" onClick={hideMenu}><FontAwesomeIcon icon={faXmark}/></button>
                    {/* <Link to="/versions" className="navBarLink burgerList">Versions</Link>
                    <Link to="/moves" className="navBarLink burgerList">Moves</Link> */}
                </div>
                <Link to={""} className="navBarLink" aria-label="button to navigate to user profil"><FontAwesomeIcon icon={faUser}/></Link>
                <Link id="notification" to={""} className="navBarLink" aria-label="button to navigate to notifications"><FontAwesomeIcon icon={faBell}/></Link>
                {isLogged ? (
                    <Button text={<FontAwesomeIcon icon={faRightFromBracket} />} onClick={logout} className="logout navBarLink" ariaLabel="button to logout"></Button>
                ) : null}
            </nav>
        </div>
    );
};

export default NavBar;