import {observable, action, useStrict} from 'mobx'
import axios from 'axios'

useStrict(true)
class CollectionStore {
  @observable store = null
  @observable next = ''
  @observable previous = ''

  constructor(){
    this.store 
    this.next
    this.previous
  }

  @action fetchFirstPage(){
    //axios call to fetch all code snippets
    return axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
    .then(action((collection) => {
      console.log(collection.data)
      this.store = collection.data['businesses'] 
      this.next = collection.data['pages']['next']
      this.previous = collection.data['pages']['prev'] || ''
      return this.store
    }))
  }
  @action fetchPage(link){
    return axios.get(link)
    .then(action((collection) => {
      console.log(collection.data)
      this.store = collection.data['businesses'] 
      this.next = collection.data['pages']['next']
      this.previous = collection.data['pages']['prev'] || ''
      return this.store
    }))
  }

}
const collectionStore = new CollectionStore()

export default collectionStore
export { CollectionStore }
