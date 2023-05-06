const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  mobile: { type: Number, required: true },
  govtid: { type: String, required: true },
  email: { type: String, required: true },
  guardianD: { type: String, required: true },
  emergency_mobile: { type: String, required: true },
  occupation: { type: String, required: true },
  religion: { type: String, required: true },
  blood_group: { type: String, required: true },
  nationality: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  meritalStatus:{type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
