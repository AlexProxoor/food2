import styled from "styled-components";

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10%;
  margin-top: 20px;
  margin-bottom: 20px;

  &::before {
    content: "|";
    margin-right: 10px;
    color: orange;
    font-size: 24px;
  }

  h2 {
    margin: 0;
    font-size: 24px;
    color: black;

    @media (max-width: 1200px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }

    @media (max-width: 390px) {
      font-size: 16px;
    }
  }

  &::before {
    @media (max-width: 1200px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }

    @media (max-width: 390px) {
      font-size: 16px;
    }
  }
`;

export const RecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  padding: 0 10%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const RecipeCardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: #2e266f;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;
