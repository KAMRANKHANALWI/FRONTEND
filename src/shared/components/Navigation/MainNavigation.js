import React from "react";
import {Link} from 'react-router-dom';

import MainHeader from "./MainHeader";
import './MainNavigation.css';

const MainNavigation = () => {
    return <MainHeader>
        <button className="main-navigation__menu-btn">
            <sapn />
            <sapn />
            <sapn />
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">YourPlaces</Link> 
        </h1>
        <nav>
            ...
        </nav>

    </MainHeader>
};

export default MainNavigation;

