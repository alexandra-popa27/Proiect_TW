const router = require('express').Router();
const utilizatorRouter = require("./utilizator");
const proiectRouter = require("./proiect");
const bugRouter = require("./bug");

router.use("/utilizatori", utilizatorRouter);
router.use("/proiecte", proiectRouter);
router.use("/bugs", bugRouter);

module.exports = router;