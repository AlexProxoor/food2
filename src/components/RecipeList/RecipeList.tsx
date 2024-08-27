import React from "react";
import { Centered, RecipeListContainer } from "./styled";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
  data: any;
  totalHits: number;
}

const RecipeList: React.FC<RecipeListProps> = ({ data, totalHits }) => {
  return (
    <div>
      <Centered>
        <h2>Found {totalHits} dishes</h2>
      </Centered>

      <RecipeListContainer>
        {data.hits && data.hits.length > 0 ? (
          data.hits.map((hit: any, index: number) => (
            <RecipeCard key={index} recipe={hit.recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </RecipeListContainer>
    </div>
  );
};

export default RecipeList;
