const mongoose = require('mongoose');

const accsessorySchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
})

const Accsessory = mongoose.model('Accsessory', accsessorySchema)

module.exports = Accsessory;
