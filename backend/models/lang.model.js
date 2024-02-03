const mongoose = require('mongoose');

const langSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        display: {
            type: Boolean,
            required: true,
        }
    }
)

module.exports = mongoose.model('lang', langSchema)