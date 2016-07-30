import API from '../API'


const TenantActions = {

  addNewTenant(tenant) {
    console.log('2. In Tenant Actions , calling API', tenant);
    API.addNewTenant(tenant);
  },


  getAllTenants() {
    API.getAllTenants();
  },

  deleteTenant(id) {
    API.deleteTenant(id);
  },

  editTenant(editObj) {
    
    API.editTenant(editObj);
  }

}


export default TenantActions