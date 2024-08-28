const Category = require("../models/category");

exports.createCategory = async function (req, res) {
  try {
    const { name, description } = req.body;

    const category = new Category({
      name,
      description,
    });

    await category.save();

    res.status(201).json({ message: "Category created", category });
  } catch (err) {
    res.status(500).json({ message: "Unable to create category", error: err });
  }
};

exports.getCategories = async function (req, res) {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

exports.getCategoryById = async function (req, res) {
  try {
    const categoryId = req.params.id;

    const category = await Category.findById(categoryId);

    if (!category) {
      return res
        .status(404)
        .json({ status: "error", message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

exports.updateCategory = async function (req, res) {
  try {
    const categoryId = req.params.id;
    const updateData = req.body;

    const category = await Category.findByIdAndUpdate(categoryId, updateData, {
      new: true,
    });

    if (!category) {
      return res
        .status(404)
        .json({ status: "error", message: "Category not found" });
    }

    res.status(200).json({ message: "Category updated", category });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

exports.deleteCategory = async function (req, res) {
  try {
    const categoryId = req.params.id;

    await Category.findByIdAndRemove(categoryId);

    res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};
