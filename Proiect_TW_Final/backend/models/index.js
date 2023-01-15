const sequelize = require("./database.js");
const Utilizator = require("./utilizatori");
const Proiect = require("./proiecte");
const Bug=require("./bugs");
const ProiectUtilizator = require("./proiectutilizator.js");

Utilizator.hasMany(Bug);
Proiect.hasMany(Bug);

Proiect.belongsToMany(Utilizator,{through:ProiectUtilizator});
Utilizator.belongsToMany(Proiect,{through:ProiectUtilizator});

module.exports = {
  sequelize,
  Utilizator,
  Proiect,
  Bug
};