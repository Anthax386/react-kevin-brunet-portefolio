const mongoose = require('mongoose');

const workSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        readMe: {
            type: String,
            required: true,
        },
        preview: {
            type: String,
            required: true,
        },
        githubLink: {
            type: String,
            required: true,
        }, 
        githubPageLink: {
            type: String,
            required: false,
        },
        tags : {
            type: [String],
            required: true,
        },
        display: {
            type: Boolean,
            required: false,
        }
    },
    {
        timestamps: true,
    } 
)

module.exports = mongoose.model('work', workSchema)