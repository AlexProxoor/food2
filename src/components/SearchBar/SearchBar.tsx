import React from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  StyledFormContainer,
  StyledForm,
  StyledField,
  StyledErrorMessage,
  SearchIcon,
} from "./styled";

const InputRecipeSchema = Yup.object().shape({
  query: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required to fill out!"),
});

interface SearchBarProps {
  handleSubmit: (
    values: { query: string },
    actions: { setSubmitting: (isSubmitting: boolean) => void },
  ) => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSubmit, loading }) => {
  return (
    <StyledFormContainer>
      <Formik
        initialValues={{ query: "" }}
        validationSchema={InputRecipeSchema}
        onSubmit={(values, actions: FormikHelpers<{ query: string }>) => {
          handleSubmit(values, actions);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <StyledForm>
            <StyledField
              type="text"
              name="query"
              placeholder="Search Your Favorite Food"
            />
            <SearchIcon
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            />
            <StyledErrorMessage name="query" component="div" />
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

export default SearchBar;
