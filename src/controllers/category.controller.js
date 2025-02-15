const db = require("../models");
const Category = db.category;

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });

    await category.save();

    res.status(200).send({ message: "Category was created successfully!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = {
      name: req.body.name,
      description: req.body.description,
    };

    await Category.findByIdAndUpdate(req.params.id, category, {
      useFindAndModify: false,
    });

    res.status(200).send({ message: "Category was updated successfully!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
    });

    res.status(200).send({ message: "Category was deleted successfully!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
