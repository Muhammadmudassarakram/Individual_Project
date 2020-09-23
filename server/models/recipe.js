const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const recipeSchema = new Schema({
  userId: setStringType(512),
  id: setStringType(512),
  name: setStringType(1024),
  description: setStringType(2048),
  ingredients: setStringType(2048),
  procedure: setStringType(2048),
  rating: setStringType(1024),
  image: setStringType(1024),
  cover: setStringType(1024),
  video: setStringType(1024),
  category:setStringType(512)
  
});

module.exports = mongoose.model('Recipe', recipeSchema);
