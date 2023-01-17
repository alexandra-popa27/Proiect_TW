const Bug= require("../models/bug");
const Utilizator = require("../models/utilizator");
const Proiect= require("../models/proiect");

 const createBug = async (req,res) => {
	try {
		const newBug = await Bug.create(req.body);
		return res.status(200).json(newBug);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const getBug = async (req, res) => {
	const bugId = req.params.id_bug;
	try {
	  const bug = await Bug.findOne({ where: { id_bug: bugId } });
	  res.status(200).send(bug);
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
};

const getAllBugs = async (req,res) => {
	try{
		const bugs = await Bug.findAll();
		return res.status(200).json(bugs);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const updateBug = async (req, res) => {
	try {
		const { id_bug } = req.params;
		const bug = await Bug.findOne({ where: { id_bug } });
		if (bug) {
			bug.id_utilizator=req.body.id_utilizator;
			bug.id_proiect=req.id_proiect;
			bug.severitate=req.severitate;
			bug.prioritate=req.prioritate;
			bug.descriere=req.descriere;
			bug.status=req.status;
			await bug.save();
			res.status(201).send({ message: "Bug updated", bug:bug });
		}
	} catch (e) {
		console.error(e);
		res.status(500).send({ message: "server error" })
	}
};

const assignBug= async (req, res) => {
	try {
		const { id_bug } = req.params;
		const bug = await Bug.findOne({ where: { id_bug } });
        if (bug) {
            bug.set('status', 'assigned');
            bug.save();
            
            res.status(200).json({bug: bug});
        } else {
            res.status(404).json({message: "bug not found."});
        }
		}
	 catch (e) {
		console.error(e);
		res.status(500).send({ message: "server error" })
	}
};

const deleteBug= async (req, res) => {
	try {
		const { id_bug } = req.params;
		const bug = await Bug.findOne({ where: { id_bug } });
        if (bug) {
            await bug.destroy();
            res.status(200).json({message: "deleted bug"});
        } else {
            res.status(404).json({message: "bug not found."});
        }
		}
	 catch (e) {
		console.error(e);
		res.status(500).send({ message: "server error" })
	}
};

const addNewBugToProiect = async (req, res) => {
	try{
		const proiect = await Proiect.findOne({ where: { id_proiect: req.params.proiectId } });
		if(proiect) {
			const bug = new Bug();
			bug.id_proiect = proiect.id_proiect;
			bug.severitate = req.body.severitate;
			bug.prioritate = req.body.prioritate;
			bug.descriere= req.body.descriere;
			bug.status = req.body.status;
			console.log(bug);
			bug.proiectId = proiect.id;
			await bug.save();
			res.status(201).send({ message: "Bug created", bug: bug });
		}
		else {
			res.status(404).send({ message: "Project does not exist" });
		}
	}
	catch(err){
		res.status(500).send(err);
	}
};

const getBugFromProiect = async (req, res) => {
	try{
		const bugs = await Bug.findAll({
			where: {
				 proiectId: req.params.proiectId
			}
	  })
		if(bugs) {
			res.status(201).json(bugs);
		}
		else {
			res.status(404).send({ message: "Bugs do not exist" });
		}
	}
	catch(err){
		res.status(500).send(err);
	}
};

const updateBugInProiect = async (req, res) => {
	try{
		const proiect = await Proiect.findOne({ where: { id_proiect: req.params.proiectId } });
		if(proiect) {
			const bug = await Bug.findOne({ where: { id_bug: req.params.bugId } });
            const utilizator=await Utilizator.findOne({where:{id_echipa:proiect.id_echipa}});
			if(bug) {
                bug.id_utilizator=utilizator.id_utilizator;
				bug.id_proiect = proiect.id_proiect;
			    bug.severitate = req.body.severitate;
			    bug.prioritate = req.body.prioritate;
			    bug.descriere= req.body.descriere;
			    bug.status = req.body.status;
				await bug.save();
				res.status(201).send({ message: "Bug updated", bug: bug });
			}
		}
		else {
			res.status(404).send({ message: "Project does not exist" });
		}
	}
	catch(err){
		res.status(500).send(err);
	}
};


module.exports = {
	addNewBugToProiect,
	createBug,
	getBug,
	updateBug,
	getAllBugs,
	getBugFromProiect,
	updateBugInProiect,
	assignBug,
	deleteBug
};