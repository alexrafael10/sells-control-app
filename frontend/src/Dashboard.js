import React, { Component } from 'react';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: 'dashboard'
        }
        this.changeMenu = this.changeMenu.bind(this);
    }

    isActive(who){
        return (this.props.active == who ? 'active' : '');
    }

    changeMenu(menu,e) {
        e.preventDefault();
 
        const {onChangeMenu} = this.props;

        console.log(menu)
        onChangeMenu(menu);
    }

    render() {
        return (
            <div className="container-fluid">
                <div class="row">
                    <div className="col">
                        <button id="dashboard" name="dashboard" href="#" className={"btn dash-btn " + (this.isActive('dashboard'))} onClick={this.changeMenu.bind(this, 'dashboard')}>
                            Dashboard
                        </button>
                    </div>
                    <div className="col">
                        <button id="control" name="control" href="#" className={"btn dash-btn " + (this.isActive('control'))} onClick={this.changeMenu.bind(this,'control')}>
                            Control
                        </button>
                    </div>
                    <div className="col">
                        <button id="sells" name="sells" href="#" className={"btn dash-btn " + (this.isActive('sells'))} onClick={this.changeMenu.bind(this, 'sells')}>
                            Sells
                        </button>
                    </div>
                    <div className="col">
                        <button id="clients-btn" name="clients-btn" href="#" className={"btn dash-btn " + (this.isActive('clients'))} onClick={this.changeMenu.bind(this, 'clients')}>
                            Clients
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
