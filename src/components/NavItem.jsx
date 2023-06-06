import React, {useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';

const NavItem = ({addr, menuToggle, item, itemName}) => {
    return (
        <Link
            to={addr}
            className={[
                "menu-item",
                ["menu-item", itemName]
                .join("-")
                ]
                .join(" ")}
            onClick={() => menuToggle()}>{item}</Link>
    );
}

export default NavItem;