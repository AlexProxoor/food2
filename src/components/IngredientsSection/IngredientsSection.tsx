import React from "react";
import {
  IngredientsWrapper,
  IngredientImagesContainer,
  IngredientImage,
  IngredientItem,
  IngredientPhotosTitle,
} from "./styled";

interface IngredientsSectionProps {
  ingredients: { quantity: string; measure: string; food: string }[];
  ingredientImages: { [key: string]: string };
}

const IngredientsSection: React.FC<IngredientsSectionProps> = ({
  ingredients,
  ingredientImages,
}) => {
  if (ingredients[0].food === "yogurt") {
    throw new Error("qw");
  }

  return (
    <>
      <IngredientsWrapper>
        <h2 className="ingredients-title">Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <IngredientItem key={index}>
              {ingredient.quantity} {ingredient.measure} {ingredient.food}
            </IngredientItem>
          ))}
        </ul>
      </IngredientsWrapper>

      <IngredientPhotosTitle>Products</IngredientPhotosTitle>
      <IngredientImagesContainer>
        {Object.keys(ingredientImages).map((ingredient) => (
          <IngredientImage
            key={ingredient}
            src={ingredientImages[ingredient]}
            alt={ingredient}
          />
        ))}
      </IngredientImagesContainer>
    </>
  );
};

export default IngredientsSection;
