import React from 'react'
import * as bs from 'react-bootstrap'


export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: ''
    }
  }
  onHover(){
    this.setState({
      hover:'menuDisplayed'
    })
  }

  exitHover(){
    this.setState({
      hover:''
    })
  }
  render () {
    return (
      <div id='wrapper'>
        <bs.Nav onMouseOver={this.onHover.bind(this)} onMouseLeave={this.exitHover.bind(this)}>
          <bs.NavItem href='localhost:4000'> Home </bs.NavItem>
        </bs.Nav>
        <div id='page-content-wrapper' className={this.state.hover}>
          <bs.Grid fluid={true}>
            { this.props.children }
          </bs.Grid>
        </div>
      </div>
    )
  }
}