const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StreetSchema = new Schema ({
    userId: String,
    properties: {
        camera: Boolean
    },
    images: Array,
    videos: Array,
})

const Street = mongoose.model('Street', StreetSchema);

module.exports = Street;