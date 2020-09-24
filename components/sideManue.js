import {useState} from 'react';                               //To use the state in functional component

const SideMenue = (props)=>{

  const {categories} =props;
  
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