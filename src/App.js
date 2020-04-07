import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { SideBar, Page, Page2 }  from './components';

import app from './App.module.css';


class App extends Component {

  render() {    
    return(
      <div>
        <SideBar />
          <Switch>
            <Route exact path='/' render={() => <Page /> }/>
            <Route exact path='/Page2' render={() => <Page2 /> }/>
          </Switch>
      </div>
    )
  }
}

export default App;