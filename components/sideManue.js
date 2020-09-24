import {useState} from 'react';                               //To use the state in functional component
//import Modal from './modal';
//import { useRouter } from 'next/router';
//import RecipeCreateForm from './recipeCreateForm';
//import { createRecipe } from '../actions';

const SideMenue = (props)=>{

  const {categories} =props;
  /*const router = useRouter();

  let modal = null;

   const handleCreateRecipe = (recipe) => {
    createRecipe(recipe).then((recipes) => {
      // Close modal after create
      //console.log(JSON.stringify(recipes))
      modal.closeModal()
      router.push('/')
    })
  }*/
  /*
  <Modal ref={ele => modal = ele} hasSubmit={false}>
          <RecipeCreateForm handleFormSubmit={handleCreateRecipe} />
          </Modal>*/
    return(
        <div>
          
          <h1 className="my-4">{props.appName}</h1>
          <div className="list-group">
         { categories.map(c =>
            <a
            onClick={() => props.changeCategory(c.name)}
            key={c.id}
            href="#"
            className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}</a>
          )
        }
       </div>
     </div>
    )
}
export default SideMenue;