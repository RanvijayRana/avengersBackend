const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let avengersSchema = Schema({
    avengerName: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    characterName: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    realName: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    movie: {
        type: Array,
        required: true,
        trim: true
    },
    power: {
        type: Array,
        required: true,
        trim: true
    }
})

mongoose.model('avengers', avengersSchema)