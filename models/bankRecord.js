var mongoose = require('mongoose');

var bankRecordSchema = new mongoose.Schema({
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    postingDate: {type: Date, required: true},
    userId: {type: String, required: true},
    isSaved: {type: Boolean},
    categoryId: {type: String}
});


var BankRecord = mongoose.model('BankRecord', bankRecordSchema);

module.exports = BankRecord;
