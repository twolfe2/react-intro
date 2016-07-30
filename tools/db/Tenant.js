import mongoose, { Schema } from 'mongoose'

let Tenant;

let tenantSchema = Schema({
  name: String,
  address: String,
  age: Number,
  email: String
})

Tenant = mongoose.model('Tenant', tenantSchema);

export default Tenant