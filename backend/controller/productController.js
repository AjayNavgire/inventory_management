const Product = require("../models/productModel");
const catchAsynceErrors = require("../middleware/catchAsynceErrors");
const ApiFeatures = require("../utils/apifeatures");


// Create Product 
exports.createProduct = catchAsynceErrors ( async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}
)

// Get All Product
exports.getAllProducts = catchAsynceErrors ( async (req, res)=>{

   const apiFeature = new ApiFeatures(Product.find(),req.query)
   .search()
   .filter()

    const products = await apiFeature.query

    res.status(200).json({
        success: true,
        products
    })    
}
)
