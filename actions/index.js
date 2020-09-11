import axios from 'axios';

  const RECIPE_DATA = [];
  const BASE_URL = 'http://localhost:3000';

  const CATEGORY_DATA = [
    {id: 'c-1', name: 'BreakFast'},
    {id: 'c-2', name: 'Dinner'},
    {id: 'c-3', name: 'Cakes'},
    {id: 'c-4', name: 'Desserts'},
    {id: 'c-5', name: 'Desi'},
    {id: 'c-6', name: 'Drinks'},
    {id: 'c-7', name: 'Dairy Free'},
    {id: 'c-8', name: 'Gluten Free'},
    {id: 'c-9', name: 'Lunch'},
    {id: 'c-10', name: 'Veg'},
    {id: 'c-11', name: 'Non-Veg'},
    {id: 'c-12', name: 'Spicy'},
    {id: 'c-13', name: 'Sweet'},
    {id: 'c-14', name: 'Salty'},
    {id: 'c-15', name: 'Salads'},
    {id: 'c-16', name: 'Snacks'},
    {id: 'c-17', name: 'Soups'},
    
    
    
    
  ]

//export the recipe catogories   
  export const getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CATEGORY_DATA)
        // reject('Cannot fetch data!')
      }, 50)
    })
  }
   

  //export the recipes
  export const getRecipes = ()=>{
       
    return axios.get(`${BASE_URL}/api/v1/recipes`).then(res => res.data)
  }

  export const createRecipe = (recipe) => {
    recipe.id = Math.random().toString(36).substr(2, 5)
  return axios.post(`${BASE_URL}/api/v1/recipes`, recipe).then(res => res.data)
  }

//export the specific recipe 
  export const getRecipeById = (id) => {

    return axios.get(`${BASE_URL}/api/v1/recipes/${id}`).then(res => res.data)
}
//Update the selected recipe
export const updateRecipe = (recipe) => {
  return axios.patch(`${BASE_URL}/api/v1/recipes/${recipe.id}`, recipe)
    .then(res => res.data)
}

//Delete the slected recipe
export const deleteRecipe = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/recipes/${id}`).then(res => res.data)
}