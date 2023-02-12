const express = require("express")
const { addProducts, getAllProducts, updateProducts, getSingleProduct, deleteProduct } = require("../controllers/prductcontroller")

const router = express.Router()


router.route("/new").post(addProducts)
router.route("/allproducts").get(getAllProducts)
router.route("/updateproduct/:id").put(updateProducts)
router.route("/singleproduct/:id").get(getSingleProduct)
router.route("/deleteproduct/:id").delete(deleteProduct)
    



module.exports = router