import { useRouter } from 'next/router';
import Link from 'next/link';
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
        <p className="lead">{ recipe.description }</p>
        <hr className="my-4" />
        <p>{ recipe.type }</p>
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