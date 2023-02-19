import express from "express";
import productController from "../controllers/productController";
import brandController from "../controllers/brandController";
import categoryController from "../controllers/categoryController";

let router = express.Router();

let initWebRotes = (app) => {
  router.get("/", (req, res) => {
    res.send("backend mykitchen");
  });

  //API ROUTES
  router.get("/api/get-all-products", productController.getAllProducts);
  router.get("/api/get-all-brands", brandController.getAllBrands);
  router.get("/api/get-all-categories", categoryController.getAllCategories);

  return app.use("/", router);
};

export default initWebRotes;