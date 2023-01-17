const Utilizator = require("../models/utilizator");
const Proiect= require("../models/proiect");
const Bug= require("../models/bug");

const getAllUtilizatori = async (req, res) => {
	try {
		const utilizatori = await Utilizator.findAll();
		res.status(200).json(utilizatori);
	}
	catch (err) {
		res.status(500).json(err);
	}
}

const updateUtilizator = async (req, res) => {
	try {
		const { id_utilizator } = req.params;
		const utilizator = await Utilizator.findOne({ where: { id_utilizator } });
		if (utilizator) {
			utilizator.id_echipa=req.body.id_echipa;
			utilizator.id_bug=req.id_bug;
			await utilizator.save();
			res.status(201).send({ message: "Utilizator updated", utilizator:utilizator });
		}
	} catch (e) {
		console.error(e);
		res.status(500).send({ message: "server error" })
	}
}

const getUtilizator = async (req, res) => {
	const utilizatorId = req.params.id_utilizator;
	try {
		const utilizator = await Utilizator.findOne({ where: { id_utilizator: utilizatorId } });
		res.status(200).send(utilizator);
	} catch (e) {
		res.status(500).send({ message: "Server error",e });
	}
};

const getUtilizatorByEmail = async (req, res) => {
	const utilizatorEmail = req.params.email;
	try {
		const utilizator = await Utilizator.findOne({ where: { email: utilizatorEmail } });
		res.status(200).send(utilizator);
	} catch (e) {
		res.status(500).send({ message: "Server error",e });
	}
};

const createUtilizator = async (req, res) => {
	try {
		const newUtilizator = await Utilizator.create(req.body);
		res.status(200).send(newUtilizator);
	}
	catch (err) {
		res.status(500).send(err);
	}
};

module.exports = {
	createUtilizator,
	getUtilizator,
	updateUtilizator,
	getAllUtilizatori,
	getUtilizatorByEmail
};