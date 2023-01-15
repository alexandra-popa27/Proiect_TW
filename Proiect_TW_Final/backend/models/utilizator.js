const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Utilizator =  sequelize.define("utilizatori", {
	id_utilizator: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	email:{
		type:DataTypes.STRING,
		allowNull: false
	},
	parola: DataTypes.STRING,
	id_echipa: DataTypes.INTEGER,
	id_bug: {
		type: DataTypes.INTEGER,
	}
})

module.exports = Utilizator;