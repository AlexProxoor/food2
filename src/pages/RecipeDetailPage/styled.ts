import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 992px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  align-items: stretch;

  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 992px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding-left: 90px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #27355a;
  color: #ffffff;
  overflow-y: auto;
  text-align: left;

  @media (max-width: 1200px) {
    padding: 15px;
    padding-left: 60px;
  }

  @media (max-width: 992px) {
    padding: 10px;
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const MealType = styled.p`
  font-size: 18px;
  font-weight: 300;
  font-stretch: expanded;
  margin-bottom: 10px;
  color: #fdbd84;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RecipeTitle = styled.h1`
  font-size: 40px;
  font-family: "Times New Roman", serif;
  font-weight: 300;
  margin: 0;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 992px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const CaloriesAndCuisine = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;

  & > *:not(:last-child) {
    margin-right: 40px;
  }

  @media (max-width: 1200px) {
    & > *:not(:last-child) {
      margin-right: 30px;
    }
  }

  @media (max-width: 992px) {
    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const Calories = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0;
  font-stretch: expanded;

  &::before {
    content: "🔥";
    font-size: 20px;
    margin-right: 8px;
  }

  .quantity {
    margin-right: 8px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CuisineType = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0;
  font-stretch: expanded;

  &::before {
    content: "🌍";
    font-size: 20px;
    margin-right: 8px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RecipeURL = styled.p`
  margin-top: 70px;

  a {
    font-size: 30px;
    font-family: "Times New Roman", serif;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1200px) {
    margin-top: 50px;

    a {
      font-size: 28px;
    }
  }

  @media (max-width: 992px) {
    margin-top: 30px;

    a {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;

    a {
      font-size: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    order: -1;
    width: 100%;
  }
`;

export const RecipeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto;
    display: block;
  }
`;
