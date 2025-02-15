const mongoose = require('mongoose');

const Post = mongoose.model(
    "Post",
    new mongoose.Schema({
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        title: String,
        slug: String,
        content: String,
        image: String,
        status: String,
    },
    { timestamps: true })
);

module.exports = Post;