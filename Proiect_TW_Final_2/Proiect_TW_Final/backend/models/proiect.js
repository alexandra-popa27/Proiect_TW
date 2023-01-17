const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Proiect =  sequelize.define("proiecte", {
	id_proiect: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	id_echipa: {
		type:DataTypes.INTEGER,
		allowNull: false,
	},
	nume: {
		type:DataTypes.STRING,
		allowNull: false,
	},
	link_repo: {
		type:DataTypes.STRING,
		allowNull: false,
	}

})

module.exports = Proiect;