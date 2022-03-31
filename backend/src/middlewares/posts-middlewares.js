const validatePost = (req, res, next) => {
    const post = req.body;
    const errors = [];
    if (!post.title) {
        errors.push("Title is required");
    }
    if (!post.body) {
        errors.push("Body is required");
    }
    if (!post.author) {
        errors.push("Author is required");
    }
    if (errors.length > 0) {
        res.status(400).json(errors);
    } else {
        res.json(post);
    }

    next();
}


module.exports = {
    validatePost
}