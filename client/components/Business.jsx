import React from 'react'
import * as bs from 'react-bootstrap'
import colectionStore from '../store'
import {observer} from 'mobx-react'

@observer
export default class Business extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount(){
    colectionStore.getBusiness(this.props.id)
  }
  render(){
    const businessData = colectionStore.business
    if(!businessData){
      return (<div>Loading</div>)
    }
    return (<div> {businessData.name} </div>)
    
  }
}
module.exports = Business