//require express
const express = require("express");
//define router
const router = express.Router();

const ctrls = require("../controllers");

router.get("/", ctrls.merch.index);

router.get("/:id", ctrls.merch.show);

router.post("/", ctrls.merch.create);

router.delete("/:id", ctrls.merch.destroy);

router.put("/:id", ctrls.merch.update);

module.exports = router;
