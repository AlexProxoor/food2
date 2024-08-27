import axios from "axios";
import {
  EDAMAM_API_URL,
  RECIPE_APP_ID,
  RECIPE_APP_KEY,
  FOOD_DATABASE_APP_ID,
  FOOD_DATABASE_APP_KEY,
} from "../constans/constans";

export const fetchRecipes = async (
  searchQuery: string,
  diet: string = "",
  dishtype: string = "",
) => {
  try {
    const response = await axios.get(`${EDAMAM_API_URL}/recipes/v2`, {
      params: {
        type: "public",
        app_id: RECIPE_APP_ID,
        app_key: RECIPE_APP_KEY,
        q: searchQuery,
        diet: diet || undefined,
        dishtype: dishtype || undefined,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export const fetchRecipeById = async (id: string) => {
  try {
    const response = await axios.get(`${EDAMAM_API_URL}/recipes/v2/${id}`, {
      params: {
        type: "public",
        app_id: RECIPE_APP_ID,
        app_key: RECIPE_APP_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};

export const fetchIngredientData = async (ingredient: string) => {
  try {
    const response = await axios.get(
      `${EDAMAM_API_URL}/food-database/v2/parser`,
      {
        params: {
          app_id: FOOD_DATABASE_APP_ID,
          app_key: FOOD_DATABASE_APP_KEY,
          ingr: ingredient,
          "nutrition-type": "cooking",
        },
      },
    );
    return response.data.parsed[0]?.food.image || null;
  } catch (error) {
    console.error("Error fetching ingredient data:", error);
    return null;
  }
};
