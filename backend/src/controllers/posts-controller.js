// let posts = [
//     {
//         _id: "1",
//         title: "Neyram the Great",
//         body: " Test body",
//         ImageUrl: "https://phantom-marca.unidadeditorial.es/4ecd5daf3a8f616db38532ef9a029dfa/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/20/16215292491991.jpg",
//         author: "wade",
//         comments: [],
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     }
// ];


const postService = require("../services/posts-service");


const listPosts = async (req, res) => {
    try {
        const posts = await postService.listPosts()
        res.setHeader("Total", posts.length)
        res.json(posts);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Error" })
    }
}


const savePosts = async (req, res, next) => {
    const post = req.body;

    try {
        const savedPost = await postService.savePost(post)
        res.status(201).json(savedPost)
    } catch (error) {
        next(error)
    }
}


const getPosts = async (req, res, next) => {

    const { id } = req.params.id;

    try {
        const post = await postService.getPosts(id)

        !post === null ? res.json(post) : res.status(404).send()

    } catch (error) {
        next(error);
    }
}




const updatePost = async (req, res, next) => {
    const { id } = req.params;
    const newpostinfo = req.body;

    try {
        const updatedPost = await postService.updatePosts(id, newpostinfo)

        !updatedPost ? res.status(404).json({ message: "Post not found" }) : null;
        res.json(updatedPost)

    }

    catch (error) {
        next(error)
    }



}


const deletePost = async (req, res, next) => {

    const { id } = req.params.id;

    try {
        await postService.deletePost(id)
        res.status(204).json({ message: "Post deleted" })
    } catch (error) {
        next(error)
    }

    // postIndex === -1 ? res.status(404).json({ message: "Post not found" }) : null;
}

module.exports = {
    listPosts,
    savePosts,
    getPosts,
    updatePost,
    deletePost
}