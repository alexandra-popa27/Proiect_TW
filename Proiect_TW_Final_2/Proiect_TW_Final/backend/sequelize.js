const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "sqlite/proiect.db"
});

sequelize.sync().then(() => {
    console.log("All tables were synchronized.")
})

module.exports = sequelize;