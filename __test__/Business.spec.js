import React from 'react'
import Business from '../client/components/Business'
import Store from '../client/store'
import renderer from 'react-test-renderer'

test('Business renders', async () => {
  await Store.getBusiness(0)
  
  const component = renderer.create(
    <Business />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})