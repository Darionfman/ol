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
    return (
      <bs.Col md={12} className='center'> 
        <h2>{businessData.name}</h2>
        <bs.Col md={12}>
          <a href={`tel:${businessData.phone}`}>
            {businessData.phone}
          </a>
        </bs.Col>
        <bs.Col md={12}>
          <a href={businessData.website} target='_blank' >
            {businessData.website}
          </a>
        </bs.Col>
        <bs.Col md={12}>
          <bs.Col md={12}>
            {`${businessData.address} ${(businessData.address2 || "")}\n${businessData.city} ${businessData.state} ${businessData.country}`}
          </bs.Col>
        </bs.Col>
      </bs.Col>
      )
  }
}
module.exports = Business