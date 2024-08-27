import React, { useState } from "react";
import axios from "axios";
import { fetchRecipes } from "utils/api";
import SearchBar from "components/SearchBar/SearchBar";
import RecipeList from "components/RecipeList/RecipeList";
import Filter from "components/Filter/Filter";
import Header from "components/Header";
import Footer from "components/Footer";
import {
  Spinner,
  CenteredSpinnerWrapper,
  LoadMoreButton,
  TitleSearch,
  AppContainer,
  MainContent,
} from "./styled";

const HomePage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDiet, setSelectedDiet] = useState<string>("");
  const [selectDishType, setSelectDishType] = useState<string>("");
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  const performSearch = (
    searchQuery: string,
    diet: string = "",
    dishtype: string = "",
  ) => {
    setLoading(true);
    fetchRecipes(searchQuery, diet, dishtype)
      .then((response) => {
        setData(response);
        setNextPageUrl(response._links?.next?.href || null);
        setError(null);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unknown error");
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadMoreRecipes = () => {
    if (nextPageUrl) {
      setLoading(true);
      axios
        .get(nextPageUrl)
        .then((response) => {
          setData((prevData: any) => ({
            ...prevData,
            hits: [...prevData.hits, ...response.data.hits],
          }));
          setNextPageUrl(response.data._links?.next?.href || null);
          setError(null);
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : "Unknown error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleSearchSubmit = (
    values: { query: string },
    actions: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    performSearch(values.query, selectedDiet, selectDishType);
    actions.setSubmitting(false);
  };

  return (
    <AppContainer>
      <Header />
      <MainContent>
        <TitleSearch>
          <h1>Discover Recipe & Delicious Food</h1>
        </TitleSearch>

        <SearchBar handleSubmit={handleSearchSubmit} loading={loading} />
        <Filter
          selectedDiet={selectedDiet}
          setSelectedDiet={setSelectedDiet}
          selectDishType={selectDishType}
          setSelectDishType={setSelectDishType}
        />
        {error && <p>Error: {error}</p>}
        {loading && (
          <CenteredSpinnerWrapper>
            <Spinner />
          </CenteredSpinnerWrapper>
        )}
        {data && (
          <>
            <RecipeList data={data} totalHits={data.count || 0} />
            {nextPageUrl && (
              <LoadMoreButton onClick={loadMoreRecipes} disabled={loading}>
                {loading ? <Spinner /> : "Show more"}
              </LoadMoreButton>
            )}
          </>
        )}
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default HomePage;
