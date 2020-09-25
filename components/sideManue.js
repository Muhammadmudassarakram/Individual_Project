import {useState} from 'react';                               //To use the state in functional component
import Modal from './Modal';
import { useRouter } from 'next/router';
import RecipeCreateForm from './RecipeCreateForm';
import { createRecipe } from '../actions/index';

const SideMenue = (props)=>{

  const {categories,isAuthenticated} =props;

  const router = useRouter();

  let modal = null;

   const handleCreateRecipe = (recipe) => {
    createRecipe(recipe).then((recipes) => {
      modal.closeModal()
      router.push('/')
    })
  }
  
  
    return(
        <div>
           
           <Modal isAuthenticated={isAuthenticated} ref={ele => modal = ele} hasSubmit={false}>
           <RecipeCreateForm handleFormSubmit={handleCreateRecipe} />
            </Modal>
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