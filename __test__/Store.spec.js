import Store from '../client/store'

test('Recieves a list of businesses', async function(){
  const fetch = await Store.fetchFirstPage()
  expect(fetch.length).toEqual(50)
})

test('The first list items id should be 0', async function(){
  const fetch = await Store.fetchFirstPage()
  expect(fetch[0]['id']).toBe(0)
})