import styled from "styled-components";

export const IngredientsWrapper = styled.div`
  background: linear-gradient(
    135deg,
    #27355a 0%,
    #27355a 40%,
    #2b395d 60%,
    #334063 80%,
    #3b4766 100%
  );
  border-radius: 32px;
  padding: 20px;
  color: #ffffff;
  margin-top: 30px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2.ingredients-title {
    margin-top: 0;
    font-size: 25px;
    margin-bottom: 20px;
    font-family: "Times New Roman", serif;
  }

  ul {
    padding-left: 0;
  }

  @media (max-width: 1200px) {
    max-width: 450px;
    padding: 15px;

    h2.ingredients-title {
      font-size: 22px;
    }

    ul {
      font-size: 15px;
    }
  }

  @media (max-width: 992px) {
    max-width: 400px;
    padding: 10px;

    h2.ingredients-title {
      font-size: 20px;
    }

    ul {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
    margin-top: 20px;

    h2.ingredients-title {
      font-size: 18px;
    }

    ul {
      font-size: 13px;
    }
  }
`;

export const IngredientPhotosTitle = styled.h2`
  font-size: 30px;
  font-family: "Times New Roman", serif;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const IngredientItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 300;
  font-stretch: expanded;
  color: rgba(255, 255, 255, 0.7);
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 24px;

  &:before {
    content: "";
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const IngredientImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 5px;
    margin-top: 15px;
  }
`;

export const IngredientImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 80px;
  }
`;
