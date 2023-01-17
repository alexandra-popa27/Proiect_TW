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

const deleteProiect= async (req, res) => {
	try {
		const { id_proiect } = req.params;
		const proiect = await Proiect.findOne({ where: { id_proiect } });
        if (proiect) {
            await proiect.destroy();
            res.status(200).json({message: "deleted proiect"});
        } else {
            res.status(404).json({message: "proiect not found."});
        }
		}
	 catch (e) {
		console.error(e);
		res.status(500).send({ message: "server error" })
	}
};

module.exports = {
	createProiect,
	getProiect,
	getAllProiecte,
	deleteProiect
};