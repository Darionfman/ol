import Store from '../client/store'

test('Recieves a list of businesses', async () => {
  const fetch = await Store.fetchFirstPage()
  //Should be the first 50 businesses
  expect(fetch.length).toEqual(50)
  //id should start at 0
  expect(fetch[0]['id']).toBe(0)
})

test('Next and previous to be strings', async () => {
  const fetch = await Store.fetchFirstPage()
  //next and previous should be strings
  expect(typeof Store.next).toEqual('string')
  expect(typeof Store.previous).toEqual('string')
  //next should be to page 2
  expect(Store.next).toBe('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?page=2')
})
test('Should be able to fetch different pages', async () => {
  const fetch = await Store.fetchPage(Store.next)
  //should be page 2 with 50 businesses
  expect(fetch.length).toEqual(50)
  expect(fetch[0]['id']).toBe(50)
  //next should be page 3 and previous should be page 2
  expect(Store.previous).toBe('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?page=1')
  expect(Store.next).toBe('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?page=3')
})