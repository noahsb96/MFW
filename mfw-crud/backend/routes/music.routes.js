const express = require("express");
const router = express.Router();
const ctrls = require("../controllers");

router.post("/music", ctrls.music.spotifyAuth);

module.exports = router;
