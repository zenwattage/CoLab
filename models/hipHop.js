const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hipHopSchema = new Schema ({
    userId: String,
    properties: {
        freestyle: Boolean
    },
    images: Array,
    videos: Array,
})

const hipHop = mongoose.model('hipHop', hipHopSchema);

module.exports = hipHop;