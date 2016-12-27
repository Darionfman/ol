import React from 'react'
import * as bs from 'react-bootstrap'

const ListItem = ({props}) => (
  <bs.Col md={12}>
    <a href={`/business/${props.id}`}>
      <bs.Col md={2}>
        Ol
      </bs.Col>
      <bs.Col md={3}>
        {props.name}
      </bs.Col>
    </a>
    <bs.Col md={4}>
      <a href={props.website}>
        {props.website}
      </a>
    </bs.Col>
    <bs.Col md={3}>
      <a href={`tel:${props.phone}`}>
        {props.phone}
      </a>
    </bs.Col>
  </bs.Col>
)
module.exports = ListItem