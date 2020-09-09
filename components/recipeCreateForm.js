import { useState } from 'react';

const RecipeCreateForm = (props) => {

    const [form, setForm] = useState({
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDesc: ''
      })

      const handleChange = (event) => {
        const target = event.target
        const name = target.name

        setForm({
          ...form,
          [name]: target.value
        })
      }

      const handleCategoryChange = (event) => {
        //debugger
        const { options } = event.target
        const optionsLength = options.length
        let value = []

        for (let i = 0; i < optionsLength; i++) {
          if (options[i].selected) {
            value.push(options[i].value)
          }
        }

        setForm({
          ...form,
          category: value.toString()
        })
      }

      const submitForm = () => {
        props.handleFormSubmit({...form})
      }

    return (
        <form>

           
          <div className="form-group">
            <label htmlFor="name">Name</label>
            
            <input
              onChange={handleChange}
              value={form.name}
              name="name"
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Recipe form place holder" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              onChange={handleChange}
              value={form.description}
              name="description"
              type="text"
              className="form-control"
              id="description"
              placeholder="Somewhere in Description place holder ..." />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              onChange={handleChange}
              value={form.rating}
              name="rating"
              type="number"
              max="5"
              min="0"
              className="form-control"
              id="rating"
              placeholder="3" />
            <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              onChange={handleChange}
              value={form.image}
              name="image"
              type="text"
              className="form-control"
              id="image"
              placeholder="http://....." />
          </div>

          <div className="form-group">
            <label htmlFor="cover">Cover</label>
            <input
              onChange={handleChange}
              value={form.cover}
              name="cover"
              type="text"
              className="form-control"
              id="cover"
              placeholder="http://......" />
          </div>

          <div className="form-group">
            <label htmlFor="longDesc">Long Description</label>
             <textarea
              onChange={handleChange}
              value={form.longDesc}
              name="longDesc"
              className="form-control"
              id="longDesc"
              rows="3"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
             <select
             onChange={handleCategoryChange}
              multiple
              className="form-control"
              id="category">
              <option>BreakFast</option>
              <option>Dinner</option>
              <option>Cakes</option>
              <option>Desserts</option>
              <option>Desi</option>
              <option>Drinks</option>
              <option>Dairy Free</option>
              <option>Gluten Free</option>
              <option>Lunch</option>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Spicy</option>
              <option>Sweet</option>
              <option>Salty</option>
              <option>Salads</option>
              <option>Snacks</option>
              <option>Soups</option>
              </select>
          </div>
          <button onClick={submitForm} type="button" className="btn btn-primary">Create</button>
        </form>
      )
  }

  export default RecipeCreateForm