const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "sqlite/proiect.db"
})

sequelize.sync({
	// force:true
}).then( () => {
	console.log("All models were sunchronized succesfully")
})

module.exports = sequelize;