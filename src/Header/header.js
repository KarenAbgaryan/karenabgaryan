import React from 'react';
import style from "./header.module.css"
import {Link} from "react-router-dom";

const Header = () => {
    const menu = [
        {id: Math.random(), name: "Home", to: "/"},
        {id: Math.random(), name: "About", to: "/about"},
        {id: Math.random(), name: "Contacts", to: "/contacts"},
        {id: Math.random(), name: "Search", to: "/search"},
    ]
    return (
        <div className={style.header}>
            {
                menu.map(({id, name, to}) => {
                    return (
                        <div key={id}>
                            <Link to={to} className={style.nav}>
                                {name}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Header;