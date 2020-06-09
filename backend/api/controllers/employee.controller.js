const Employee = require('../models/employee-model.js');

exports.create = (req, res) => {
    // Validate request
    const {
        empid,
        name,
        rate
    } = req.body;
    console.log(empid)
    if (!empid || !name || !rate) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
    var d = new Date();
    var curmonth = d.getMonth()
    const emp = new Employee({
        id: empid,
        name: name,
        rate: rate,
        ["monthly_details." + curmonth + ".hours"]: 0,
        ["monthly_details." + curmonth + ".allowances"]: 0,
        ["monthly_details." + curmonth + ".deductions"]: 0,
    });

    emp.save()
        .then(data => {
            console.log(data);
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Employee."
            });
        });
};
exports.addhours = (req, res) => {

    const { hours,allowances,deductions } = req.body;
    if (!hours && !allowances && !deductions) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
    var d = new Date();
    var curmonth = d.getMonth();

    var query = {
        id: req.params.id
    };
    var set = {
        $inc: {}
    };
    set.$inc["monthly_details." + curmonth + ".hours"] = hours;
    set.$inc["monthly_details." + curmonth + ".allowances"] = allowances || 0;
    set.$inc["monthly_details." + curmonth + ".deductions"] = deductions || 0;
    console.log(set)
    Employee.findOneAndUpdate(query, set, {
            new: true
        })
        .then(emp => {
            if (!emp) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params.id
                });
            }
            res.send(emp);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: err.message + req.params.id
            });
        });
};
exports.updatehours = (req, res) => {

    const {
        hours,
        allowances,
        deductions
    } = req.body;

    if (hours >= 0 || allowances >= 0 || deductions >= 0) {
        var d = new Date();
        var curmonth = d.getMonth()

        var query = {
            id: req.params.id
        };

        var set = {
            $set: {}
        };
        if (hours >= 0) {
            set.$set["monthly_details." + curmonth + ".hours"] = hours;
        }
        if (allowances >= 0) {
            set.$set["monthly_details." + curmonth + ".allowances"] = allowances;
        }
        if (deductions >= 0) {
            set.$set["monthly_details." + curmonth + ".deductions"] = deductions;
        }
        
        Employee.findOneAndUpdate(query, set, {
                new: true
            })
            .then(emp => {
                if (!emp) {
                    return res.status(404).send({
                        message: "Employee not found with id " + req.params.id
                    });
                }
                res.send(emp);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Employee not found with id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: err.message + req.params.id
                });
            });
    } else {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
};
exports.findAll = (req, res) => {
    Employee.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving employees."
            });
        });
};