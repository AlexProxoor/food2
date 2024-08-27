import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSelect = styled.select`
  width: 25%;
  padding: 10px;
  border-radius: 25px;
  border: 2px solid orange;
  background-color: white;
  color: black;
  font-size: 16px;
  font-family: "Arial", sans-serif;

  @media (max-width: 390px) {
    width: 100%;
    margin-bottom: 5px;
  }

  &:focus {
    border-color: orange;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
  }
`;

export const StyledOption = styled.option`
  font-family: "Arial", sans-serif;
`;
