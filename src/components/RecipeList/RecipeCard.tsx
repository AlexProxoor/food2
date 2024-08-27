import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipeCardContainer } from "./styled";

interface RecipeCardProps {
  recipe: any;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const recipeId = recipe.uri.split("#recipe_")[1];
    navigate(`/recipe/${recipeId}`);
  };

  // Проверка на наличие слова "курица" (в любом регистре) в названии рецепта
  // if (!recipe.labell) {
  //   throw new Error("Recipe label contains the word 'Chicken'!");
  // }

  return (
    <RecipeCardContainer onClick={handleClick}>
      <div>
        <img src={recipe.image} alt={recipe.label} />
      </div>
      <h3>{recipe.label}</h3>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
