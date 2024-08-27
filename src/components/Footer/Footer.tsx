import React from "react";
import { FooterContainer } from "./styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
