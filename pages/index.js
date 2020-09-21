import React,{useState , useEffect} from 'react';
import SideMenue from '../components/sideManue';
import Carousel from '../components/carousel';
import RecipeList from '../components/RecipeList';
import {getRecipes,getCategories} from '../actions';

const Home = (props)=>{
  const { images, categories, recipes } = props;
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
    <div className="home-page" >
      <div className="margin-nav" >
        <div className="container">
          <div className="row">
          <div className="col-lg-3">
            <SideMenue   
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
    </div>

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




/*
class Home extends React.Component 
{
  constructor(props){
  super(props)
  this.state = {
    recipes : [],
    errorMessage:''
  }
  }
  componentDidMount(){
    getRecipes()
           .then((recipes)=>{
             this.setState({recipes : recipes})
           }
           )
           .catch((error)=>{
             this.setState({errorMessage:error})
             }
            )
  }

render()
{
  //const {recipes} = this.state; //or  const recipes = this.state.recipes; then remove this.state
  const {recipes , errorMessage } = this.state;
  return(
      <div>
        <div className="home-page">
        <div className="container">
          <div className="row">
          <div className="col-lg-3">
            <SideMenue appName="My Recipe List"/>
          </div>
          <div className="col-lg-9">
            <Carousel/>

            {{recipes}?  <div className="row">
            <RecipeList recipesData = {recipes}/>                     
            </div> : (<div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>)}

            </div>
          </div>
        </div>
      </div>
    </div>

)
}
  }
export default Home
*/