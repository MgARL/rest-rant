const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
  name: {type: String, required: true},
  pic: String,
  cuisines:{type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)