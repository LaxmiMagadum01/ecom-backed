const exress = require("express");
const {
  createProduct,
  getALLProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");

const productRoutes = express.Router();
productRoutes.post("/", createProduct);
productRoutes.get("/", getALLProducts);
productRoutes.get("/:id", getProductById);
productRoutes.put("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);
module.exports = productRoutes;
