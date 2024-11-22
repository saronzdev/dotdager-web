import React from 'react'
import {Route, Switch} from 'wouter'
import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'
import './styles/App.css'

function App() {
  return (
    <div className='main-cont'>
      <Switch>
        <Route path={'/'} component={Home}/>
        <Route path={'/game'} component={Game}/>
        <Route>
          <div className='not-found'>
            <span>404 Not Found</span>
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App