import { useRouter } from 'next/router';
import { getRecipeById } from '../../actions'



const Recipe = (props) => {

    const { recipe } = props
    const router = useRouter()
    const { id } = router.query    // const id  = router.query.id;

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{ recipe.name }</h1>
        <p className="lead">{ recipe.description }</p>
        <hr className="my-4" />
        <p>{ recipe.type }</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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