// var db = require('./models');
// require( './index.js');
// var Users;
module.exports = function( sequelize, DataTypes )
{
    var Users = sequelize.define("Users",
    {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false //accepting null value for authentication testing. -Aashish

        },

        email: {
            type: DataTypes.STRING,

            allowNull: false
        },

        jobskill: {
            type: DataTypes.STRING,
            allowNull: false
        },

        specialization: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lookingFor: {
            type: DataTypes.STRING,
            allowNull: false
        },

        jobCost: {
            type: DataTypes.STRING,
            allowNull: false
        },

        thumbsUp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },


        avatar: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {

        timestamps: false,
        createdAt:false


     });

    return Users;
};
/*
// module.exports = Users;
module.exports.getUserByUsername = function(username, callback)
{
    
    console.log("You are here?");
    var queryUser = {username: username};
    Users.findOne(queryUser, callback)
}

module.exports.getUserById = function(id, callback)
{
    // var test = require('./users.js');
    Users.findById(id, callback);
}


module.exports.comparePassword = function(password, callback)
{
    // var test = require('./users.js');
    var queryPass = {password: password};
    Users.find(queryPass,callback);
}
*/