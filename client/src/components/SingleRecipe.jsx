import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SingleRecipe({ recipe }) {
  const { recipesId } = useParams();
  const navigate = useNavigate();
  // console.log(recipe)
  const handler = () => {
    navigate(`/recipes/${recipe.recipesId}`);
  };

  return (
    <button className="recipe-button" onClick={handler} key={recipe.recipesId}>
      <h2>{recipe.recipe_name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <p>{recipe.prep_time}</p>
      <p>{recipe.cook_time}</p>
      <p>{recipe.servings}</p>
    </button>
  );
}
