var mongoose = require('mongoose');

var BankRecordSchema = new mongoose.Schema({
  Description: String,
  Type: String,
  Amount: Number,
  PostDate: String,
  PostedDate: String,
  TransDate: String,
  Balance: Number,
  Details: String,
  CheckNumber: String,
  Calc: String,
  Category: String,
  userId: String,
  isSaved: Boolean
});


var BankRecord = mongoose.model('BankRecord', BankRecordSchema);

module.exports = BankRecord;
