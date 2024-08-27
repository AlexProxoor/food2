import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 83vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20vh;
  box-sizing: border-box;
`;

export const ErrorCode = styled.h1`
  font-size: 100px;
  color: red;
  margin: 0;
`;

export const ErrorMessage = styled.h2`
  font-size: 36px;
  color: black;
  margin: 10px 0;
`;

export const SubMessage = styled.p`
  font-size: 18px;
  color: grey;
  margin: 10px 0;
`;

export const HomeButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
