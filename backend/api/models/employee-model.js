var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var monthschema = new Schema({
    hours: {
        type: Number
    },
    allowances: {
        type: Number
    },
    deductions: {
        type: Number
    }

});
var employeeSchema = new Schema({
    id : {
        type: String,
        unique : true,
        required : true,
    },
    name :{
        type: String,
        unique : false,
        required : true
    },
    rate : {
        type: Number,
        unique : false,
        required : true
    },
    monthly_details :[monthschema],
}, {
    timestamps: true
});
module.exports = mongoose.model('employee', employeeSchema);