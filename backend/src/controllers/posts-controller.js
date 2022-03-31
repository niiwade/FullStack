let posts = [
    {
        _id: "1",
        title: "Neyram the Great",
        body: " Test body",
        ImageUrl: "https://phantom-marca.unidadeditorial.es/4ecd5daf3a8f616db38532ef9a029dfa/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/20/16215292491991.jpg",
        author: "wade",
        comments: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];




const listPosts = (req, res) => {
    res.setHeader("Total", posts.length)
    res.json(posts);
}



const getPosts = (req, res) => {
    // const postId = req.params.id;
    // const post = posts.find(p => p._id === postId);
    // !post === null ? res.json(post) : res.status(404).json({ message: "Post not found" });
    // // if (!post) {
    // //     res.status(404).json({ message: "Post not found" });
    // // } else {
    // //     res.json(post);
    // // }

    const { id } = req.params.id;

    const post = posts.find((post) => post._id === id);

    !post === null ? res.json(post) : res.status(404).json({ message: "Post not found" });

    res.json()
}

const savePosts = (req, res) => {
    const post = req.body;

    // const title = post.title?.trim?.() ?? "";

    // title === "" ? res.status(400).json({ message: "Title is required" }) : null;

    post._id = `${posts.length + 1}`;
    posts.push(post);


    res.status(201).json(post)



}


const updatePost = (req, res) => {
    const { id } = req.params.id;
    const newpost = req.body;

    const postIndex = posts.findIndex((newpost) => newpost._id === id);
    postIndex === -1 ? res.status(404).json({ message: "Post not found" }) : null;
    posts[postIndex] = newpost;
    res.status(200).json(newpost);
}


const deletePost = (req, res) => {

    const { id } = req.params.id;

    const postIndex = posts.findIndex((post) => post._id === id);


    postIndex === -1 ? res.status(404).json({ message: "Post not found" }) : null;


    posts.splice(postIndex, 1)

    res.status(200).json({ message: "Post deleted" })
}

module.exports = {
    listPosts,
    savePosts,
    getPosts,
    deletePost,
    updatePost
}