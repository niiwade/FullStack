const express = require("express");

const router = express.Router();

const postsController = require("../controllers/posts-controller")

router.get("/", postsController.listPosts)


router.post("/", postsController.savePosts)

router.get("/:id", postsController.getPosts)

router.delete("/:id", postsController.deletePost)

router.put("/", postsController.updatePost)

module.exports = router;