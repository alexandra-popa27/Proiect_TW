const utilizatorController = require("../controllers/utilizator");
const router = require('express').Router();

router.get("/", utilizatorController.getAllUtilizatori)
router.get("/:id_utilizator", utilizatorController.getUtilizator);
router.get("/:email", utilizatorController.getUtilizatorByEmail);
router.put("/:id_utilizator", utilizatorController.updateUtilizator);
router.post("/", utilizatorController.createUtilizator);
module.exports = router;