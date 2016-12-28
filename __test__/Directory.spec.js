import React from 'react'
import Directory from '../client/components/Directory'
import Store from '../client/store'
import renderer from 'react-test-renderer'

test('Directory renders', async () => {
  await Store.fetchFirstPage()
  
  const component = renderer.create(
    <Directory />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})