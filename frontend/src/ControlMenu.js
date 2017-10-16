import React, { Component } from 'react';

class ControlMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: 'dashboard'
        }
        this.changeMenu = this.changeMenu.bind(this);
    }

    isActive(who) {
        return (this.props.active == who ? 'active' : '');
    }

    changeMenu(menu, e) {
        e.preventDefault();

        const { onChangeMenu } = this.props;

        console.log(menu)
        onChangeMenu(menu);
    }

    render() {
        return (
            <div className="container-fluid">
                <div class="row">
                    <div className="col">
                        <button id="new-client" name="dashboard" href="#" className={"btn dash-btn " + (this.isActive('dashboard'))} onClick={this.changeMenu.bind(this, 'add-client')}>
                            New Client
                        </button>
                    </div>
                    <div className="col">
                        <button id="new-sell" name="control" href="#" className={"btn dash-btn " + (this.isActive('control'))} onClick={this.changeMenu.bind(this, 'add-sell')}>
                            New Sell
                        </button>
                    </div>
                    <div className="col">
                        <button id="new-product" name="sells" href="#" className={"btn dash-btn " + (this.isActive('sells'))} onClick={this.changeMenu.bind(this, 'add-product')}>
                            New Product
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlMenu;
