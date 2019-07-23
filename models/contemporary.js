const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContemporarySchema = new Schema ({
    userId: String,
    properties: {
        freestyle: Boolean
    },
    images: Array,
    videos: Array,
})

const Contemporary = mongoose.model('Contemporary', ContemporarySchema);

module.exports = Contemporary;