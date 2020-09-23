const express = require('express');
const router = express.Router();

const recipeCtrl = require('../controllers/recipe');
const authService = require('../services/auth');

router.post('', authService.checkJWT,
                authService.checkRole('siteOwner'),
                recipeCtrl.saveRecipe);

router.get('', recipeCtrl.getRecipes);

router.get('/:id', recipeCtrl.getRecipesbyId);

router.patch('/:id', authService.checkJWT,
               authService.checkRole('siteOwner'),
               recipeCtrl.updateRecipe);

router.delete('/:id', authService.checkJWT,
               authService.checkRole('siteOwner'),
               recipeCtrl.deleteRecipe);


module.exports = router;

