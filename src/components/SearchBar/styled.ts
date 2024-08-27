import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import { FaSearch } from "react-icons/fa";

export const StyledFormContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10%;

  @media (max-width: 1200px) {
    padding: 0 8%;
  }

  @media (max-width: 768px) {
    padding: 0 6%;
  }

  @media (max-width: 480px) {
    padding: 0 4%;
  }

  @media (max-width: 390px) {
    padding: 0 2%;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 10px;

  @media (max-width: 390px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  border-radius: 25px;
  border: 2px solid orange;
  background-color: white;
  color: black;
  font-size: 16px;
  font-family: "Garamond", serif;

  &::placeholder {
    color: #ccc;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    border-color: orange;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }

  @media (max-width: 390px) {
    font-size: 14px;
    padding: 10px;
    margin: 0;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: orange;
  cursor: pointer;
  font-size: 18px;

  @media (max-width: 390px) {
    font-size: 16px;
    right: 10px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;

  @media (max-width: 390px) {
    font-size: 12px;
  }
`;
