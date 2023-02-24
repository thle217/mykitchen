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

  //API ROUTES
  router.get("/api/get-all-products", productController.getAllProducts);
  router.get("/api/get-all-brands", brandController.getAllBrands);
  router.get("/api/get-all-categories", categoryController.getAllCategories);

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
