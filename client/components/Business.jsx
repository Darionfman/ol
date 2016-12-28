import React from 'react'
import * as bs from 'react-bootstrap'
import colectionStore from '../store'
import {observer} from 'mobx-react'

@observer
export default class Business extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount(){
    console.log(this)
    colectionStore.getBusiness(this.props.id)
    .then((business) =>{
      this.setState({loading:false})
    })
  }
  render(){
    const businessData = colectionStore.business
    if(this.loading){
      return (<div>Loading</div>)
    }
    console.log(businessData)
    return (<div> It worked </div>)
    
  }
}
module.exports = Business