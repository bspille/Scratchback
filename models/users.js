
module.exports = function( sequelize, DataTypes ) 
{
    var Users = sequelize.define("User", 
    {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phoneNum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    });

    return Users;
};

