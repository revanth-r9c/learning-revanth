const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 15
    },
    price: {
        type: Number,
        // required: true
        min: 0
    },
    availability: {
        type: String,
        enum: ['available', 'not available'],
        // required: true
    }
})

module.exports = mongoose.model('Product', ProductSchema);