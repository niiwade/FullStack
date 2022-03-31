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
    res.json(posts);
}


const savePosts = (req, res) => {
    res.json({ title: "new post" })
}


module.exports = {
    listPosts,
    savePosts
}