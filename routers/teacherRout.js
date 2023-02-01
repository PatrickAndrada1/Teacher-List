const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.home);
router.get("/add", Controller.renderAddTeacher);
router.post("/add", Controller.handlerAddTeachers);
router.get("/edit/:id", Controller.renderEditTeachers);
router.post("/edit/:id", Controller.handlerEditTeachers);
router.get("/delete/:id", Controller.deleteTeachers);

module.exports = router;
