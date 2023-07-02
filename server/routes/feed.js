const express = require("express");
const router = express.Router();
const feedcontroller = require("../controller/feed")

router.get("/views",feedcontroller.getInterviews)

router.post("/add",feedcontroller.addInterview)

router.delete("/delete/:id",feedcontroller.deleteInterview)

router.put("/update/:id",feedcontroller.updateInterview)

router.get("/view/:id",feedcontroller.getInterview)

router.delete("/delete",feedcontroller.deleteInterviews)

module.exports = router