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

            if (req.body.username && req.body.username != user.local.username){
                user.local.username =  req.body.username;
            }

            if (req.body.email && req.body.email != user.local.email){
                user.local.email =  req.body.email;
            }

            if (req.body.address && req.body.address != user.local.address){
                user.local.address =  req.body.address;
            }

            if (req.body.address && req.body.address != user.local.address){
                user.local.address =  req.body.address;
            }

            if (req.body.role && req.body.role != user.local.role){
                user.local.role =  req.body.role;
            }
            
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
    },
    getSortedAndPaged: function (req, res) {

        var perPage = 10,
            page = Math.max(0, parseInt(req.params.page)),
            sortBy = 'local.' + req.params.sortBy;

        User.find({'local.deleted': false}).sort(sortBy).skip(perPage * page).limit(perPage).exec(function (error, users) {
            if (error) {
                res.send(error);
            }

            res.json(users);
        })
    },
    create: function (req, res) {
        console.log(req.body);
        var user = new User({
            local: {
                username: req.body.username,
                email: req.body.email,
                password: user.generateHash(req.body.password),
                role: req.body.role,
                address: req.body.address
            }
        });

        user.save(function (error) {
            if(error){
                res.send(error);
            }
        });

        res.end();
    }
}