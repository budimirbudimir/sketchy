import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Workspace from './pages/Workspace'
import Statistics from './pages/Statistics'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route path='/draw'>
            <Workspace />
          </Route>

          <Route path='/stats'>
            <Statistics />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
