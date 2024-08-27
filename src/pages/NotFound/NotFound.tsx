import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const NotFound: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
