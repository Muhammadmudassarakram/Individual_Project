import { useRouter } from 'next/router'



const Recipe = () => {
  const router = useRouter()
  const {id}  = router.query;    // const id  = router.query.id;

  return (
    <div className="container">
      <h1>Recipe with id: { id } </h1>
    </div>
  )
}


export default Recipe;