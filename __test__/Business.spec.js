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
  //the business at id 0 is Yundt-Flatley
  expect(tree.children[0].children[0]).toBe('Yundt-Flatley')
  expect(tree).toMatchSnapshot()
})