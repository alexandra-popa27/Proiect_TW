const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Bug =  sequelize.define("bugs", {
	id_bug: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	id_utilizator: {
		type:DataTypes.INTEGER,
		allowNull: false,
	},
    id_proiect: {
		type:DataTypes.INTEGER,
		allowNull: false,
	},
	severitate: {
		type:DataTypes.STRING,
		allowNull: false,
	},
    prioritate:{
        type:DataTypes.INTEGER,
        validate:{
            min:1,
            max:10,
        },
        allowNull: false,
    },
	descriere: {
		type:DataTypes.STRING,
		allowNull: false,
	},
    status: {
		type:DataTypes.STRING,
		allowNull: false,
	}
})

module.exports = Bug;