const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    category: {
        type:String,
        required: [true, "Please Enter Product Category"]
    },
    quantity:{
        type:Number,
        required:[true, "Please Enter Product Quantity"],
        maxlength:[4, "Stock cannot exceed 4 characters"],
    },
    unit: {
        type: String,
        required: [true, "Please Enter Unit Name"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Products",productSchema)