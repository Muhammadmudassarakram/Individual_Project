import React from 'react';
import Router from 'next/router';
import RecipeCreateForm from '../../../components/recipeCreateForm';
import { getRecipeById,updateRecipe } from '../../../actions';


class EditRecipe extends React.Component {

  static async getInitialProps({query}) {
    const recipe = await getRecipeById(query.id)
    return { recipe }

  }

  handleUpdateRecipe = (recipe) => {
    updateRecipe(recipe).then((updatedRecipe) => {
      Router.push('/recipes/[id]', `/recipes/${recipe.id}`)
    })
  }


  render() {
    const { recipe } = this.props;
    return (
      <div className="editRecipe" {...this.props.auth}>
        <div className="container">
          <h1>Edit the Recipe</h1>
          <RecipeCreateForm
            submitButton="Update"
            initialData={recipe}
            handleFormSubmit={this.handleUpdateRecipe} />
        </div>
      </div>
    )
  }
}


export default EditRecipe; 