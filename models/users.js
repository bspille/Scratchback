
module.exports = function( sequelize, DataTypes )
{
    var Users = sequelize.define("User",
    {

        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,

            allowNull: true //accepting null value for authentication testing. -Aashish

            allowNull: false

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


            allowNull: false
        },

        jobskill: {
            type: DataTypes.STRING,
            allowNull: false
        },

        specalization: {
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
            type: DataTypes.INTEGER,
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


    },

    {
  
        timestamps: false,
        createdAt:false


     });

    return Users;
};
