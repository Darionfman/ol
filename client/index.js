import React from "react"
import { Provider } from 'mobx-react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Directory from './components/Directory'
import stor from './store'

render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Directory}/>
        </Route>
      </Router>,
  document.getElementById('app')
)