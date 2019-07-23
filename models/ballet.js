const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BalletSchema = new Schema ({
    userId: String,
    properties: {
        // Can you dance en pointe?
        pointe: Boolean
    },
    images: Array,
    videos: Array,
})

const Ballet = mongoose.model('Ballet', BalletSchema);

module.exports = Ballet;