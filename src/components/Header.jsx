import React, { useState } from "react";
import {LInk, Link} from 'react-router-dom';

import NavItem from './NavItem';

import '../css/Header.css';

const Header = ({menuToggle, menuToggler}) => {

    const [menuItems, setMenuItems] = useState([
        {
            name: "intro",
            address: "/intro",
            text: "온앤온 소개"
        },
        {
            name: "services",
            address: "/services",
            text: "서비스 소개"
        },
        {
            name: "news",
            address: "/news",
            text: "새소식"
        },
        {
            name: "contact",
            address: "/contact",
            text: "Contact Us"
        },
    ]);

    return (
        <nav className="navbar" id='top-navbar'>
            <div className="navbar-logo">
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" id="logo" />
                </Link>
            </div>
            <div className="menu-box">
                <div
                    className={!menuToggle
                        ? "burger__menu"
                        : "x__menu"}
                    onClick={() => menuToggler()}>
                    <div className="burger_line1"></div>
                    <div className="burger_line2"></div>
                    <div className="burger_line3"></div>
                </div>
                <div className={["menu-list-box", !menuToggle ? "menu-list-hidden" : "menu-list-visible"].join(" ")}>
                    <div className="menu-list">
                        {
                            menuItems.map((item) => {
                                return (
                                    <NavItem
                                        itemName={item.name}
                                        addr={item.address}
                                        key={item.name}
                                        item={item.text}
                                        menuToggle={menuToggler}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
    
}

export default Header;