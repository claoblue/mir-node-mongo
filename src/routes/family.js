const router = require('express').Router();
const familyController = require("../controllers/family.controller");

router.post("/newFamily", familyController.createFamily);
// router.get("/familiesList", familyController.familyList);

module.exports = router;