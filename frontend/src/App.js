import React, { Component } from 'react';

import Dashboard from './Dashboard';
import Control from './Control';

import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      menu: 'dashboard'
    }

    this.onChangeMenu = this.onChangeMenu.bind(this);
  }

  onChangeMenu (menu){
    this.setState({menu:menu});
  }
  
  render() {
    let menu = this.state.menu;

    if (menu == 'dashboard'){
      return (
        <div className="App">
          <Dashboard onChangeMenu={this.onChangeMenu}/>
        </div>
      );
    } else if (menu == 'control'){
      return (
        <div className="App">
          <Control />
        </div>
      );
    }
    
    return (
      <div className="App">
        <Control />
      </div>
    );
  }
}

export default App;
