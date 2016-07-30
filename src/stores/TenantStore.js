import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import TenantConstants from '../constants/TenantConstants.js'


let _tenants = [];

class TenantStore extends EventEmitter {
  constructor(props) {
    super(props)

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case TenantConstants.RECIEVE_ONE_TENANT:
          console.log('6. In TenantStore, adding payload to tenant store array');
          _tenants.push(action.tenant);
          console.log('Emit Change- State of _tenants has changed');
          this.emit('CHANGE');
          break;
        case TenantConstants.RECIEVE_ALL_TENANTS:
          _tenants = action.tenants;
          console.log(action.tenants);
          this.emit('CHANGE');
      }
    })
  }

  getAllTenants() {
    return _tenants;
  }

  startListening(cb) {
    console.log('8. In TenantStore, fetching current tenants list');
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }


}


export default new TenantStore();