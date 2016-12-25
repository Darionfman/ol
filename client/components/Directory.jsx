import React from 'react'
import * as bs from 'react-bootstrap'
import {observer} from 'mobx-react'
import colectionStore from '../store'

@observer
export default class Directory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    colectionStore.fetchFirstPage()
    .then((list) => {
      console.log(colectionStore.store[0])
      this.setState({loading: false})
    })
  }

  render () {
    if(this.loading) return <div> Loading </div>
    let list = colectionStore.store
    let directories = list.map((business) => (<div key={business.id}>{business.name}</div>))
    return (
      <div id='wrapper'>
      {directories}
      </div>
    )
  }
}