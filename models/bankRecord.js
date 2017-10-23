var mongoose = require('mongoose');

var bankRecordSchema = new mongoose.Schema({
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    postingDate: {type: Date, required: true},
    userId: {type: ObjectId, required: true},
    isSaved: {type: Boolean},
    categoryId: {type: ObjectId}
});


var BankRecord = mongoose.model('BankRecord', bankRecordSchema);

module.exports = BankRecord;