const routes = require('next-routes')

module.exports = routes()
.add('recipe', '/recipes/:id/recipe')
.add('EditRecipe ', '/recipes/:id/edit')


