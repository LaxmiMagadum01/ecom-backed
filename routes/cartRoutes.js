const {
  addToCart,
  updateQuantity,
  removeProduct,
  clearCart,
} = require("../controllers/cartcontroller");
const { isAuth } = require("../middlewares/authmiddlewares");

const cartRoutes = express.Routes();
cartRoutes.get("/", isAuth, getCart);
cartRoutes.post("/add", isAuth, addToCart);
cartRoutes.put("/", isAuth, updateQuantity);
cartRoutes.delete("/product", isAuth, removeProduct);
cartRoutes.delete("/", isAuth, clearCart);
module.exports = cartRoutes;
