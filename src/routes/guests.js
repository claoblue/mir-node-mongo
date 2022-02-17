const router = require('express').Router();
const guestController = require("../controllers/guest.controller");

router.post("/newGuest", guestController.createGuest);
router.get("/guestsList", guestController.guestsList);

module.exports = router;