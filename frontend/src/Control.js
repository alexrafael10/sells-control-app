import React, { Component } from 'react';

import ControlMenu from './ControlMenu';
import NewClientForm from './NewClientForm';
import NewProductForm from './NewProductForm';
import NewSellForm from './NewSellForm';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: ''
        }
        this.onChangeMenu = this.onChangeMenu.bind(this);
        this.onFinished = this.onFinished.bind(this);
    }

    onChangeMenu(menu) {
        this.setState({ menu: menu });
    }

    onFinished(){
        this.setState({menu: ''});
    }

    render() {
        let menu = this.state.menu;

        if (menu == '') {
            return (
                <ControlMenu active="" onChangeMenu={this.onChangeMenu} />
            );
        } else if (menu == 'add-client') {
            return (
                <NewClientForm onFinished={this.onFinished}/>
            );
        } else if (menu == 'add-sell') {
            return (
                <NewSellForm onFinished={this.onFinished} />
            );
        } else if (menu == 'add-product') {
            return (
                <NewProductForm onFinished={this.onFinished} />
            );
        }
    
        return (
            <ControlMenu active="" onChangeMenu={this.onChangeMenu}/>
        );
    }
}

export default Control;
