import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
