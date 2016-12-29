import React from 'react'
import * as bs from 'react-bootstrap'
import {observer} from 'mobx-react'
import ListItem from './ListItem'
import colectionStore from '../store'

@observer
export default class Directory extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount(){
    colectionStore.fetchFirstPage()
  }

  fetch(link){
    if(!!link) colectionStore.fetchPage(link)
  }

  render () {
    let list = colectionStore.store
    let nextLink = colectionStore.next
    let prevLink = colectionStore.previous
    if(!list.length) return <div> Loading </div>

    let directories = list.map((business) => (<ListItem key={business.id} business={business} />))
    return (
      <bs.Col md={12}>
        <bs.Row>
          <bs.Col md={6}>
          <bs.Button onClick={() => this.fetch(prevLink)}>previous</bs.Button>
          </bs.Col>
          <bs.Col md={6}>
          <bs.Button className="right" onClick={() => this.fetch(nextLink)}>next</bs.Button>
          </bs.Col>
        </bs.Row>
        <bs.Row>
          {directories}
        </bs.Row>
      </bs.Col>
    )
  }
}