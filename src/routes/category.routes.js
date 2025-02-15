const {authJwt} = require("../middleware");
const controller = require("../controllers/category.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get("/api/categories", [authJwt.verifyToken], controller.getCategories);
    app.get("/api/categories/:id", [authJwt.verifyToken], controller.getCategoryById);
    app.post("/api/categories", [authJwt.verifyToken, authJwt.isAdmin], controller.createCategory);
    app.put("/api/categories/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.updateCategory);
    app.delete("/api/categories/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteCategory);
};