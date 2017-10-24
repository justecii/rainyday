var mongoose = require('mongoose');

var BankRecordSchema = new mongoose.Schema({
  Amount: {type: Number, required: true},
  Description: {type: String, required: true},
  PostDate: {type: Date},
  TransDate: {type: Date},
  Type: {type: String},
  Balance: {type: Number},
  Details: {type: String},
  CheckNumber: {type: String},
  Calc: {type: String},
  userId: {type: String, required: true},
  isSaved: {type: Boolean},
  Category: {type: String}
  // CategoryId: {type: ObjectId}
});


var BankRecord = mongoose.model('BankRecord', BankRecordSchema);

module.exports = BankRecord;
