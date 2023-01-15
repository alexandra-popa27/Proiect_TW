const Proiect = require("../models/proiect");

const getProiect = async (req, res) => {
	const proiectId = req.params.id_proiect;
	try {
	  const proiect = await Proiect.findOne({ where: { id_proiect: proiectId } });
	  res.status(200).send(proiect);
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 const createProiect = async (req,res) => {
	try {
		const newProiect = await Proiect.create(req.body);
		return res.status(200).json(newProiect);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const getAllProiecte = async (req,res) => {
	try{
		const proiecte = await Proiect.findAll();
		return res.status(200).json(proiecte);
	}
	catch(err){
		return res.status(500).json(err);
	}
}

module.exports = {
	createProiect,
	getProiect,
	getAllProiecte,
};