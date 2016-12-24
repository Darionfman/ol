import {observable, action, useStrict} from 'mobx'
import axios from 'axios'

useStrict(true)
class BusinessStore {
  @observable store = null

  constructor(){
    this.store 
  }

  @action fetchFirstPage(){
    //axios call to fetch all code snippets
    return axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
    .then(action((collection) => this.store = collection.data['businesses'] ))
  }

}
const store = new BusinessStore()

export default businessStore
export { BusinessStore }
