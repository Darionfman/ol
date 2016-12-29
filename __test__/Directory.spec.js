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
  let list = tree.children[1].children
  //should have all 50 businesses as child nodes
  expect(list.length).toEqual(50)
  //child nodes should be contained in divs
  expect(list[0].type).toBe('div')
  //they should be full width collumns
  expect(list[12].props.className).toBe('col-md-12')
  //the second child of the child nodes should have a child containing text
  expect(typeof list[12].children[0].children[1].children[0]).toBe('string')
  //checks to make sure it matches the recent snapshot
  expect(tree).toMatchSnapshot()
})
test('Directory renders with correct number of children with different page number', async () => {
  await Store.fetchPage('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?page=2')
  
  const component = renderer.create(
    <Directory />
  )
  let tree = component.toJSON()
  let list = tree.children[1].children
  //should have all 50 businesses as child nodes
  expect(list.length).toEqual(50)
  //child nodes should be contained in divs
  expect(list[0].type).toBe('div')
  //they should be full width collumns
  expect(list[12].props.className).toBe('col-md-12')
  //the second child of the child nodes should have a child containing text
  expect(typeof list[12].children[0].children[1].children[0]).toBe('string')
})