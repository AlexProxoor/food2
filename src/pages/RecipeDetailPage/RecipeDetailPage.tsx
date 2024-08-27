import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeById, fetchIngredientData } from "utils/api";
import Header from "components/Header";
import Footer from "components/Footer";
import ErrorBoundary from "pages/ErrorBoundary";
import NotFound from "pages/NotFound/NotFound";
import {
  OuterContainer,
  InnerContainer,
  InfoContainer,
  ImageContainer,
  RecipeImage,
  MealType,
  RecipeTitle,
  Calories,
  CuisineType,
  CaloriesAndCuisine,
  RecipeURL,
} from "./styled";
import IngredientsSection from "components/IngredientsSection/IngredientsSection";

const ingredientCache: { [key: string]: string } = {};

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [ingredientImages, setIngredientImages] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const data = await fetchRecipeById(id);
          if (!data.recipe) {
            navigate("/not-found");
            return;
          }
          setRecipe(data.recipe);
          setError(null);

          const images: { [key: string]: string } = {};
          for (const ingredient of data.recipe.ingredients) {
            if (ingredientCache[ingredient.food]) {
              images[ingredient.food] = ingredientCache[ingredient.food];
            } else {
              const imageUrl = await fetchIngredientData(ingredient.food);
              if (imageUrl) {
                ingredientCache[ingredient.food] = imageUrl;
                images[ingredient.food] = imageUrl;
              }
            }
          }
          setIngredientImages(images);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      };

      fetchRecipe();
    }
  }, [id, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <main>
        {recipe ? (
          <OuterContainer>
            <InnerContainer>
              <ErrorBoundary>
                <InfoContainer>
                  <MealType>
                    <strong>Meal type - </strong> {recipe.mealType}
                  </MealType>
                  <RecipeTitle>{recipe.label}</RecipeTitle>
                  <CaloriesAndCuisine>
                    <Calories>
                      <span className="quantity">{recipe.calories}</span>
                      сalories
                    </Calories>
                    <CuisineType>
                      <span>Cuisine Type - </span>{" "}
                      {recipe.cuisineType.join(", ")}
                    </CuisineType>
                  </CaloriesAndCuisine>
                  <IngredientsSection
                    ingredients={recipe.ingredients}
                    ingredientImages={ingredientImages}
                  />
                  <RecipeURL>
                    <a
                      href={recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Recipe link
                    </a>
                  </RecipeURL>
                </InfoContainer>
                <ImageContainer>
                  <RecipeImage src={recipe.image} alt={recipe.label} />
                </ImageContainer>
              </ErrorBoundary>
            </InnerContainer>
          </OuterContainer>
        ) : (
          <p>No recipe found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RecipeDetailPage;
