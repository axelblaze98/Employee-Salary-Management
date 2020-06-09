var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    }
})

module.exports = mongoose.model('admin', adminSchema);