const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LandscapeSchema = new Schema ({
    userId: String,
    properties: {
        camera: Boolean
    },
    images: Array,
    videos: Array,
})

const Landscape = mongoose.model('Landscape', LandscapeSchema);

module.exports = Landscape;