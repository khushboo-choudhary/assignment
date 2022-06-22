const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type:String, required: true},
    rating:{type:String, required: true},
    release_date: {type:String, required: true}
})

module.exports = mongoose.model("products", productSchema);