const mongoose = require('mongoose');

const productSchema = mongoose.Schema ({
    name: {
        type:String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    favoris: {
        type:Boolean,
        default: false
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'category'
    }
})

module.exports = mongoose.model('product',productSchema);