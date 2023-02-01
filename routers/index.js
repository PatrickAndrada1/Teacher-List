const express = require("express");
const router = express.Router();
const teachers = require("../routers/teacherRout");
const Controller = require("../controllers/controller");

router.get("/", Controller.home);
router.use("/teachers", teachers);

module.exports = router;
