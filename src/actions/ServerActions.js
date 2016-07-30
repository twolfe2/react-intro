import AppDispatcher from '../AppDispatcher'
import TenantConstants from '../constants/TenantConstants.js'


console.log('T CONTSTANTS',TenantConstants.RECIEVE_ONE_TENANT);
const ServerActions = {

  receiveOneTenant(tenant) {
    console.log('5. In ServerActions, dispatching RECIEVE_ONE_TENANT with payload:', tenant );
    AppDispatcher.dispatch({
      actionType: TenantConstants.RECIEVE_ONE_TENANT,
      tenant
    })
  },

  receiveAllTenants(tenants) {
    AppDispatcher.dispatch({
      actionType: TenantConstants.RECIEVE_ALL_TENANTS,
      tenants
    })
  }

}


export default ServerActions