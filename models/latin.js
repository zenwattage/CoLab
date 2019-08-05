const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LatinSchema = new Schema ({
    userId: String,
    properties: {
        freestyle: Boolean
    },
    images: Array,
    videos: Array,
})

const Latin = mongoose.model('Latin', LatinSchema);

module.exports = Latin;