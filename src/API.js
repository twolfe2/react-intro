import { post,get, ajax } from 'jquery'
import ServerActions from './actions/ServerActions'



const API = {

  getAllTenants() {
    get('/api/tenants')
      .done(response => {ServerActions.receiveAllTenants(response)})
  },

  addNewTenant(tenant) {
    console.log('3. In API, posting to server');
    post('/api/tenants', tenant)
      .done(response => {ServerActions.receiveOneTenant(response)})
    // setTimeout( function() {


    // //response = {name, email, _id}
    // tenant._id = '123456';
    // let response = tenant;
    // console.log('4. Server response with response: ', response);
    // console.log('** Firing ServerActions.receiveOneTenant');
    // ServerActions.receiveOneTenant(response);
      
    // }, 300)
  // }
},

  deleteTenant(id) {
    ajax({
      method: 'DELETE',
      url: `/api/tenants/${id}`
    }).done(response => {ServerActions.receiveAllTenants(response)})
    .fail(err => console.log(err))

  },

  editTenant(editObj) {
    ajax({
      method: 'PUT',
      url: '/api/tenants',
      data: editObj
    }).done(response => {ServerActions.receiveAllTenants(response)})
    .fail(err => console.log(err))
  }

}


export default API
