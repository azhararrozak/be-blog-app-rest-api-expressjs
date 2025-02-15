const mongoose = require("mongoose");

const Category = mongoose.model(
    "Category",
    new mongoose.Schema({
        name: String,
        description: String,
    },
    { timestamps: true 

    })
);

module.exports = Category;