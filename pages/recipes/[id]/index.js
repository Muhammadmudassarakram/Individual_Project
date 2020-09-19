import { useRouter } from 'next/router';
import Link from 'next/link';
//import { ListGroup, ListGroupItem } from 'reactstrap';
import YouTube from '@u-wave/react-youtube';
import { getRecipeById,deleteRecipe } from '../../../actions';



const Recipe = (props) => {

    const router = useRouter()
    const { id } = router.query    // const id  = router.query.id;
    const { recipe } = props;
    const handleDeleteRecipe = (id) => {
    deleteRecipe(id).then(() => {
      router.push('/')
    })
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{ recipe.name }</h1>
        <p>{ recipe.category }</p>
        <hr className="my-4" />
        <h2 className="display-6">Description</h2>
        <p className="lead">{ recipe.description }</p>
        <hr className="my-4" />
        <h2 className="display-6">Ingredients</h2>
       <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-primary">{ recipe.ingredients }</li>
       </ul>
       
      <h2 className="display-6">Procedure</h2>
       <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-secondary">{ recipe.procedure }</li>
       </ul>
       <hr className="my-4" />
       <YouTube  className="youtube-player" video={recipe.video}  width="100%" height="350px" />
       <hr className="my-4" />

        <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
        <button onClick={() => handleDeleteRecipe(id)} className="btn btn-danger btn-lg mr-1" href="#" role="button">Delete</button>
        <Link href="/recipes/[id]/edit" as={`/recipes/${id}/edit`}>
           <button
            className="btn btn-warning btn-lg"
            role="button">Edit</button>
        </Link>
      </div>
      <p className="desc-text">
        { recipe.longDesc }
      </p>
    </div>
  )
}

Recipe.getInitialProps = async ({ query }) => {
    const recipe = await getRecipeById(query.id)

    return { recipe }
  }

export default Recipe; 