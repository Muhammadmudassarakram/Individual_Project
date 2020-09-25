import React,{useState , useEffect} from 'react';
import SideMenue from '../components/SideManue';
import Carousel  from '../components/Carousel';
import RecipeList from '../components/RecipeList';
import {getRecipes,getCategories} from '../actions';
import Wraper from '../components/shared/Wraper';

const Home = (props)=>{
  const { images, categories, recipes } = props;
  const {isAuthenticated}=props.auth;
  const [ filter, setFilter ] =  useState('All')

  const changeCategory = category => {
    setFilter(category)
  }

  const filterRecipes = recipes => {
    if (filter === 'All') {
      return recipes;
    }

    return recipes.filter((r) => {
      return r.category && r.category.includes(filter)
    })
  }
  

  
  return(
    <Wraper {...props.auth}>
      <div className="margin-nav" >
        <div className="container">
          <div className="row">
          <div className="col-lg-3">
                  
            <SideMenue 
            isAuthenticated={isAuthenticated}   
            changeCategory={changeCategory}
            activeCategory={filter}
            categories={categories}
            appName={"Categories"}/>
          </div>
          <div className="col-lg-9">
            <Carousel images={images}/>
            <div className="row">
            <RecipeList recipes={filterRecipes(recipes) || []} />                    
            </div>

            </div>
          </div>
        </div>
      </div>
    </Wraper>

  )

}

Home.getInitialProps = async () => {
  const recipes = await getRecipes();
  const categories = await getCategories();
  const images = recipes.map(recipe => ({
      id: `image-${recipe.id}`,
      url: recipe.cover,
      name: recipe.name }))

  return {
    recipes,
    images,
    categories
  }
}
export default Home;



