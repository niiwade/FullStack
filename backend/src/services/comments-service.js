const Comment = require("../models/comment")

const listComments = async (id) => {

    const comments = await Comment.findById(id).lean().exec()
    return comments
}

const saveComments = async (id, comment) => {

    const newComment = new Comment(id, comment)
    await newComment.save()
    return newComment.length - 1
}

const getComments = async (id) => {

    const comment = await Comment.findById(id).lean().exec()
    return comment
}

const updateComment = async (id, comment) => {

    const updatedComment = await Comment.findByIdAndUpdate(id, comment, { returnDocument: "after" }).lean().exec()
    return updatedComment
}


const deleteComment = async () => {
    await Post.findByIdAndDelete(id).exec()
}



module.exports = {

    listComments,
    saveComments,
    getComments,
    updateComment,
    deleteComment
}