import React from 'react'
import Directory from '../client/components/Directory'
import Store from '../client/store'
import renderer from 'react-test-renderer'

test('Directory renders with correct number of children', async () => {
  await Store.fetchFirstPage()
  
  const component = renderer.create(
    <Directory />
  )
  let tree = component.toJSON()
  //should have all 50 businesses as child nodes
  expect(tree.children.length).toBe(50)
  //child nodes should be contained in divs
  expect(tree.children[0].type).toBe('div')
  //they should be full width collumns
  expect(tree.children[12].props.className).toBe('col-md-12')
  //the second child of the child nodes should have a child containing text
  expect(typeof tree.children[12].children[0].children[1].children[0]).toBe('string')
  //checks to make sure it matches the recent snapshot
  expect(tree).toMatchSnapshot()
})