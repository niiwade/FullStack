const Post = require("../models/post")


const listPosts = async () => {
    const posts = await Post.find().lean().exec()
    return posts
}

module.exports = {
    listPosts
}