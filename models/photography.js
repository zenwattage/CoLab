const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotographySchema = new Schema ({
    userId: String,
    properties: {
        camera: Boolean
    },
    images: Array,
    videos: Array,
})

const Photography = mongoose.model('Photography', PhotographySchema);

module.exports = Photography;