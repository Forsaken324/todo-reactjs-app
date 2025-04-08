import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import "./navbar.css";

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);

    const toggleMenu = () => {
        setOpenNav(!openNav)
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-header">
                    <h2>Todo Tracker</h2>
                </div>

                <div className="hamburger-icon" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </div>

                <div className={`nav-links ${openNav ? "open" : ""}`}>
                    <div className="close-icon" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">More Applications</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;