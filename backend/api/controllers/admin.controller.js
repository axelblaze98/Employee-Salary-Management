const Admin = require('../models/admin-model.js');

exports.create = (req, res) => {
    const {
        username,
        password
    } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
    const admin = new Admin({
        username: username,
        password: password
    })

    admin.save()
        .then(data => {
            console.log(data);
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Employee."
            });
        });
};

exports.verify = (req, res) => {
    const {
        username,
        password
    } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            message: "fields can not be empty"
        });
    }
    Admin.findOne({
        username: username,
        password: password
    }).then(data => {
        if (data)
            res.send(data);
        else
            res.send("Invalid User Name or Password")
    }).catch(err => console.log(err));
};