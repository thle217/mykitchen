import express from "express";
import productController from "../controllers/productController";
import brandController from "../controllers/brandController";
import categoryController from "../controllers/categoryController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRotes = (app) => {
  router.get("/", (req, res) => {
    res.send("backend mykitchen");
  });

  //Product
  router.get("/api/product/get-all", productController.getAllProducts);
  router.get("/api/product/:product_id", productController.getProductById);
  router.post("/api/product/create", productController.createProduct);
  router.put("/api/product/update/:product_id", productController.updateProduct);
  router.delete("/api/product/delete/:product_id", productController.deleteProduct);

  //Brand
  router.get("/api/brand/get-all", brandController.getAllBrands);

  //Category
  router.get("/api/category/get-all", categoryController.getAllCategories);

  //User
  router.get("/api/user/get-all", userController.getAllUser);
  router.get("/api/user/get-id/:id", userController.getUserById);
  router.post("/api/user/create", userController.creatUser);
  router.post("/api/user/create-admin", userController.creatAdmin);
  router.delete("/api/user/delete/:id", userController.DeleteUser);
  router.put("/api/user/update/:id", userController.UpdateUser);
  router.post("/api/user/login", userController.loginUser);

  return app.use("/", router);
};

export default initWebRotes;
