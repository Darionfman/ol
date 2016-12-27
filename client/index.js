import React from "react"
import { Provider } from 'mobx-react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Directory from './components/Directory'
import Business from './components/Business'
import store from './store'
require('./css/directory.css')
require('./css/business.css')


render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Directory}/>
          <Route path="/business/:id"  component={Business}/>
        </Route>
      </Router>,
  document.getElementById('app')
)