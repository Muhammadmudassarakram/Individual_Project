import React from 'react';
import Link from 'next/link';

class RecipeList extends React.Component{

shortenText = (text,maxLength)=>{
  if(text && text.length>maxLength)
  {
        return text.substr(0,maxLength)+'...';
  }
  else{
    return text;
  }
};

  
  renderData(recipes){
    return recipes.map(recipe=>
      (
    
    <div key={recipe.id} className="col-lg-4 col-md-6 mb-4">
     <div className="card h-100">
     <Link href="/recipes/[id]" as={`/recipes/${recipe.id}`}>
      <a><img className="card-img-top" src={recipe.image} alt={recipe.name} /></a>
     </Link>
      <div className="card-body">
        <h4 className="card-title">
        <Link href="/recipes/[id]" as={`/recipes/${recipe.id}`}>
          <a >{recipe.name}</a>
          </Link>
        </h4>
        <div className="recipe-category">{recipe.category}</div>
       <p className="card-text">{this.shortenText(recipe.description , 200)}</p>
      </div>
      <div className="card-footer">
     <small className="text-muted">{recipe.rating}</small>
      </div>
    </div>
  </div>

  
)
       
)
  };
  
      render(){
       
       const {recipes} = this.props;                  
      
      return(
        <React.Fragment>
         {this.renderData(recipes)}
        </React.Fragment>
      )
    }
}
export default RecipeList;