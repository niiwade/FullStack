const express = require("express");

const router = express.Router();

const commentsController = require("../controllers/comments-controller")


// routes for comments


router.get("/", commentsController.listComments)

router.post("/", commentsController.saveComments)

router.get("/:id", commentsController.getComments)

router.delete("/:id", commentsController.deleteComment)

router.put("/", commentsController.updateComment)

module.exports = router;