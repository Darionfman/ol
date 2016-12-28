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

  render () {
    let list = colectionStore.store
    if(!list.length) return <div> Loading </div>

    let directories = list.map((business) => (<ListItem key={business.id} business={business} />))
    return (
      <bs.Col md={12}>
        {directories}
      </bs.Col>
    )
  }
}