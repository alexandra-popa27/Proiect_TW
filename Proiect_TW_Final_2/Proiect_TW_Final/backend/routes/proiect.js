const proiectController = require("../controllers/proiect");
const router = require('express').Router();

router.get("/", proiectController.getAllProiecte)
router.get("/:id_proiect", proiectController.getProiect);
router.post("/", proiectController.createProiect);
router.delete("/:id_proiect",proiectController.deleteProiect);

module.exports = router;