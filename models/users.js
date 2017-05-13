// var db = require('./models');
// require( './index.js');
// var Users;

var bcrypt = require('bcrypt-nodejs');

module.exports = function( sequelize, DataTypes )
{
    var Users = sequelize.define("Users",
    {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: DataTypes.STRING,

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


     },{
            freezeTableName: true,
            instanceMethods: 
            {
                generateHash: function(password) 
                {
                    console.log("Generating Hash function!");
                    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                },
                validPassword: function(password) 
                {
                    return bcrypt.compareSync(password, this.password);
                }
            }
       }
     
     );

    return Users;
};
