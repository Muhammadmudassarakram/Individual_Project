import {useState} from 'react';                               //To use the state in functional component
import Modal from './modal';
import { useRouter } from 'next/router';
import RecipeCreateForm from './recipeCreateForm';
import { createRecipe } from '../actions';

const SideMenue = (props)=>{

  const {categories} =props;
  const router = useRouter();

  let modal = null;

   const handleCreateRecipe = (recipe) => {
    createRecipe(recipe).then((recipes) => {
      // Close modal after create
      //console.log(JSON.stringify(recipes))
      modal.closeModal()
      router.push('/')
    })
  }
  
    return(
        <div>
          <Modal ref={ele => modal = ele} hasSubmit={false}>
          <RecipeCreateForm handleFormSubmit={handleCreateRecipe} />
          </Modal>
          <h1 className="my-4">{props.appName}</h1>
          <div className="list-group">
         { categories.map(c =>
            <a
              key={c.id}
              href="#"
              className="list-group-item">{c.name}</a>
          )
        }
       </div>
     </div>
    )
}
export default SideMenue;