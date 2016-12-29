import React from 'react'
import * as bs from 'react-bootstrap'
import colectionStore from '../store'
import {Link} from 'react-router'

const ListItem = ({business, props}) => (
  <bs.Col md={12}>
    <Link to={`/business/${business.id}`}>
      <bs.Col md={2}>
        Ol
      </bs.Col>
      <bs.Col className='grey' md={3}>
        {business.name}
      </bs.Col>
    </Link>
    <bs.Col md={4}>
      <a href={business.website} target="_blank">
        {business.website}
      </a>
    </bs.Col>
    <bs.Col className='grey' md={3}>
      <a className='phone-number' href={`tel:${business.phone}`}>
        {business.phone}
      </a>
    </bs.Col>
  </bs.Col>
)
module.exports = ListItem