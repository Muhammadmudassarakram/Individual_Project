const Recipe = require('../models/recipe');

exports.getRecipes = (req, res) => {

  Recipe.find({})
           .sort({'startDate': 1})
           .exec((err, recipesData) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(recipesData);
  });
}

exports.getRecipesbyId = (req, res) => {
  const recipeId = req.params.id;

  Recipe.findById(recipeId)
           .select('-__v')
           .exec((err, recipe) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(recipe);
  });
}

exports.saveRecipe = (req, res) => {
  const recipeData = req.body;
  const userId = req.user && req.user.sub;
  const recipe = new Recipe(recipeData);
  recipe.userId = userId;

  Recipe.save((err, createdRecipe) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(createdRecipe,'Recipe has been succesfuly added!');
  });
}


exports.updateRecipe = (req, res) => {
  const recipeId = req.params.id;
  const recipeData = req.body;

  Recipe.findById(recipeId, (err, foundRecipe) => {
    if (err) {
      return res.status(422).send(err);
    }

    foundRecipe.set(recipeData);
    foundRecipe.save((err, savedRecipe) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(savedRecipe);
    });
  })
}

exports.deleteRecipe = (req, res) => {
  const recipeId = req.params.id;

  Recipe.deleteOne({_id: recipeId}, (err, deletedRecipe) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json({status: 'DELETED'});
  })
}
