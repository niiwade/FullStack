const commentService = require("../services/comments-service")


const listComments = async (req, res, next) => {
    const { id } = req.params
    try {
        const comments = await commentService.listComments(id)
        res.setHeader("Total", comments.length)
        res.json(comments)
    } catch (error) {
        next(error)
    }
}


const saveComments = async (req, res, next) => {
    const { id } = req.params
    const comment = req.body
    try {
        const savedComment = await commentService.saveComments(id, comment)
        res.status(201).json(savedComment)
    } catch (error) {
        next(error)
    }
}


const getComments = async (req, res, next) => {

    const { id } = req.params.id

    try {

        const comment = await commentService.getComment(id)

        !comment === null ? res.json(comment) : res.status(404).send()
    } catch (error) {
        next(error)
    }
}


const updateComment = async (req, res, next) => {

    const { id } = req.params
    const newcommentinfo = req.body

    try {

        const updatedComment = await commentService.updateComment(id, newcommentinfo)
        !updatedComment ? res.status(404).json({ message: "Post not found" }) : null
        res.json(updatedComment)
    } catch (error) {
        next(error);
    }
}

const deleteComment = async (req, res, next) => {

    const { id } = req.params.id


    try {
        await commentService.deleteComment(id)
        res.status(204).json({ message: "Post Deleted" })
    } catch (error) {
        next(error);
    }
}



module.exports = {

    listComments,
    saveComments,
    getComments,
    updateComment,
    deleteComment

}