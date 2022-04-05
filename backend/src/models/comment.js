const mongoose = require("mongoose")


const CommentSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        }

    },
    { timestamp: true }
)


const CommentModel = mongoose.model("Comment", CommentSchema)

module.exports = CommentModel