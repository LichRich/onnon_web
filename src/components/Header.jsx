import React, { useEffect, useState } from "react";
import {LInk, Link} from 'react-router-dom';

import NavItem from './NavItem';

import '../css/Header.css';

const Header = ({menuToggle, menuToggler}) => {

    const [prevScrollTop, setPrevScrollTop] = useState(window.scrollY);
    const [showBar, setShowBar] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            const scrollV = window.scrollY;
            // setShowBar(prevScrollTop > scrollV);
            setShowBar(scrollV < 150);
            setPrevScrollTop(scrollV);
        }
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [prevScrollTop]);

    const [menuItems, setMenuItems] = useState([
        {
            name: "intro",
            address: "/intro",
            text: "회사 소개"
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
            text: "Contact"
        },
    ]);

    return (
        <nav className={["navbar", showBar ? "show" : "hide"].join(" ")} id='top-navbar'>
            <div className="navbarContainer">
                <div className="navbar-logo">
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/logo_new.png'} alt="logo" id="logo" />
                        {/* <img src={process.env.PUBLIC_URL + '/symbolonly_w_white.png'} alt="logo" id="logo" /> */}
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
            </div>
        </nav>
    );
    
}

export default Header;