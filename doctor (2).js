const express = require("express");
const router = express.Router();

const DoctorController = require("../controllers/doctor");
const checkAuth = require("../middleware/check-auth");
const doctorAuth = require("../middleware/doctor-auth");

router.post("/signup", DoctorController.doctor_signup);

router.post("/login", DoctorController.doctor_login);
router.post("/test",doctorAuth,DoctorController.doctor_createLab)

module.exports = router;
