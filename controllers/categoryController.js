const categoryModel = require("../models/categoryModel");

module.exports.getCategoryList = async (req, res) => {

  try {
    let categoryList = await categoryModel.find();
    if (categoryList) {
      res.status(200).send({
        status: true,
        categoryList,
      });
    } else {
      res.status(200).send({
        status: false,
        message: "No Collections available",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Server error " + error,
    });
  }
};