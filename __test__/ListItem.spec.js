import React from 'react'
import ListItem from '../client/components/ListItem'
import Store from '../client/store'
import {shallow} from 'enzyme'

test('A single list item should render with business info', async () => {
  await Store.fetchFirstPage()
  const business = Store.store[0]
  const item = shallow(
    <ListItem business={business} />
 )

  expect(item.html()).toEqual('<div class="col-md-12"><a><div class="col-md-2">Ol</div><div class="grey col-md-3">Yundt-Flatley</div></a><div class="col-md-4"><a href="http://www.halvorson.com/" target="_blank">http://www.halvorson.com/</a></div><div class="grey col-md-3"><a class="phone-number" href="tel:4034880719">4034880719</a></div></div>')
})