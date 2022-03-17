//import module
const mongoose = require('mongoose');

//init schema
const Schema = mongoose.Schema

//model declaration
const ComicModel = mongoose.model("comic", new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },

    backgroundImage: {
        type: String,
    },

    descriptionImage: [
        {
            type: String
        }
    ],

    eps: [
        {
            epsNum: {
                type: Number,
                
            },
            epsImages: [
                {
                    type: String
                }
            ]
        }   
    ],

    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "user"
        }
    ],

    comments: [
        {
            userComment: {
                type: Schema.Types.ObjectId,
                ref: "user"
            },
            comment: {
                type: String,
            }
        }
    ],

    uploadDate: {
        type: Date,
        default: new Date()
    }

}))


//export module
module.exports = ComicModel