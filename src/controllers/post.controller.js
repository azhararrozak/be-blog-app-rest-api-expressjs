const db = require("../models");
const Post = db.post;
const Category = db.category;

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("category");
        res.status(200).send(posts);
    } catch (err) {
        res.status(500).send({ message: err });
    }
}

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("category");
        res.status(200).send(post);
    } catch (err) {
        res.status(500).send({ message: err });
    }
}

exports.createPost = async (req, res) => {
    try {
        const post = new Post({
            category: req.body.category,
            title: req.body.title,
            slug: req.body.slug,
            content: req.body.content,
            image: req.body.image,
            status: req.body.status,
        });

        await post.save();

        res.status(200).send({ message: "Post was created successfully!" });
    } catch (err) {
        res.status(500).send({ message: err });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = {
            category: req.body.category,
            title: req.body.title,
            slug: req.body.slug,
            content: req.body.content,
            image: req.body.image,
            status: req.body.status,
        };

        await Post.findByIdAndUpdate(req.params.id, post);

        res.status(200).send({ message: "Post was updated successfully!" });
    } catch (err) {
        res.status(500).send({ message: err });
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.id);

        res.status(200).send({ message: "Post was deleted successfully!" });
    } catch (err) {
        res.status(500).send({ message: err });
    }
}