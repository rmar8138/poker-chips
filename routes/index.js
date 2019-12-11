const express = require("express");
const roomsController = require("../controllers/roomsController");
const router = express.Router();

router.get("/", (req, res) => res.render("home"));

router.get("/:id", roomsController.show);

router.post("/rooms", roomsController.create);

module.exports = router;
