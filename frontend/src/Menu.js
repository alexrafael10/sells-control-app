import React, { Component } from 'react';
import NavMenu from './NavMenu';

import './Menu.css';

class Menu extends Component {
    state = {
        menu: 'dashboard'
    };

    changeSection() {
        this.state = { menu: section };
    }

    render() {
        var { actual } = this.state.menu;
        return (
            <NavMenu active="dashboard" />
        );
    }
}

export default Menu;
