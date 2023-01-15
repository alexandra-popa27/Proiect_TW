const bugController = require("../controllers/bug");
const router = require('express').Router();

router.get("/", bugController.getAllBugs)
router.get("/:id_bug", bugController.getBug);
router.put("/:id_bug",bugController.updateBug);
router.post("/", bugController.createBug);
router.post("/:id_proiect/bugs", bugController.addNewBugToProiect);
router.get("/:id_proiect/bugs", bugController.getBugFromProiect);
router.put("/:id_proiect/bugs/:id_bug", bugController.updateBugInProiect);

module.exports = router;

