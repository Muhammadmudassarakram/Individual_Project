
  const RECIPE_DATA = [
    {
      id: '1',
      name: 'Biryani',
      releaseYear: 1994,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 4.8,
      type: 'spicy',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80',
      cover: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
      id: '2',
      name: 'Chicken Roast',
      releaseYear: 2008,
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 4.7,
      type: 'salty,spicy',
      image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80',
      cover: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1640&q=80'
      
    },
    {
      id: '3',
      name: 'Cake',
      releaseYear: 2004,
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 4.9,
      type: 'sweet',
      image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=80',
      cover: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80'
    }
  ]

  const CATEGORY_DATA = [
    {id: 'c-1', name: 'Veg'},
    {id: 'c-2', name: 'Non-Veg'},
    {id: 'c-3', name: 'Spicy'},
    {id: 'c-4', name: 'Sweet'},
    {id: 'c-5', name: 'Salty'},
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
       
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(RECIPE_DATA)
            reject('Data can not be fetched')
          },50)

          
      })

      return RECIPE_DATA;
  }

//export the specific recipe 
  export const getRecipeById = (id) => {

    return new Promise((resolve, reject) => {
      const recipeIndex = RECIPE_DATA.findIndex(r => r.id === id)
      const recipe = RECIPE_DATA[recipeIndex]

      setTimeout(() => resolve(recipe), 50)
    })
}