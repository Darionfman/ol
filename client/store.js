import {observable, action, useStrict} from 'mobx'
import axios from 'axios'

useStrict(true)
class CollectionStore {
  @observable store = []
  @observable next = ''
  @observable previous = ''
  @observable business = null

  constructor(){
    this.store 
    this.next
    this.previous
    this.business
  }

  @action fetchFirstPage(){
    //axios call to fetch all code snippets
    return axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
    .then(action((collection) => {
      this.store = collection.data['businesses'] 
      this.next = collection.data['pages']['next']
      this.previous = collection.data['pages']['prev'] || ''
      return this.store
    }))
    .catch(error => console.log(error))
  }
  @action fetchPage(link){
    if(!link) throw new Error('No link was submitted')
    return axios.get(link)
    .then(action((collection) => {
      this.store = collection.data['businesses'] 
      this.next = collection.data['pages']['next']
      this.previous = collection.data['pages']['prev'] || ''
      return this.store
    }))
    .catch(error => console.log(error))
  }
  @action getBusiness(id){
    return axios.get(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/${id}`)
    .then(action((business) => {
      this.business = business.data
      return this.business
    }))
    .catch(error => console.log(error))
  }

}
const collectionStore = new CollectionStore()

export default collectionStore
export { CollectionStore }
