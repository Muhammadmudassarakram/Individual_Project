import React,{useState , useEffect} from 'react';
import SideMenue from '../components/sideManue';
import Carousel from '../components/carousel';
import RecipeList from '../components/RecipeList';
import {getRecipes} from '../actions';

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