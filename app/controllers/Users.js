var User = require('./../models/User');

module.exports = {
    getAll: function (req, res) {
        User.find({ 'local.deleted': false }, function (error, users) {
            if (error) {
                res.send(error);
            }
            
            res.json(users);
        });
    },
    getById: function (req, res) {
        User.findById(req.params.id, function (error, user) {
            if (error) {
                res.send(error);
            }
            
            res.json(user);
        });
    },
    update: function (req, res) {
        User.findById(req.params.id, function (error, user) {
            if (error) {
                res.send(error);
            }
            
            //Add validation here
            user.local.username = req.body.username;
            user.local.password = user.generateHash(req.body.password)
            user.local.email = req.body.email;
            user.local.address = req.body.address;
            user.local.role = req.body.role;
            
            user.save(function (error) {
                if(error){
                    res.send(error);
                }
            });
            
            res.end();
        });
    },
    delete: function (req, res) {
        User.findById(req.params.id, function (error, user) {
            if (error) {
                res.send(error);
            }
            
            user.local.deleted = true;
            
            user.save(function (error) {
                if(error){
                    res.send(error);
                }
            });
            
            res.end();
        });
    }
}