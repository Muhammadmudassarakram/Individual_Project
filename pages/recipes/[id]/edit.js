import React from 'react';
import Router from 'next/router';
import RecipeUpdateForm from '../../../components/RecipeUpdateForm';
import { getRecipeById,updateRecipe } from '../../../actions';
import Wraper from '../../../components/shared/Wraper';


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
    const {isAuthenticated}=this.props.auth;
    console.log(isAuthenticated);
    return (
      <div className="editRecipe" {...this.props.auth}>
        <div className="container">
          <h1>Edit the Recipe</h1>
         { isAuthenticated &&
         <RecipeUpdateForm
            submitButton="Update"
            initialData={recipe}
            handleFormSubmit={this.handleUpdateRecipe} />}
        </div>
      </div>
    )
  }
}


export default EditRecipe; 