const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
  name: {type: String, required: true},
  pic: {type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5OMUIoilPWpHpoXZwE6sz-3Miz8uK2nV9ELyfhdhQav1jpT0Fg0Qbrx92-CrpIUpAxdc&usqp=CAU'},
  cuisines:{type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  founded: Number
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)