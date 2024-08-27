import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

export const FooterWrapper = styled.footer`
  margin-top: auto;
`;

export const TitleSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 8px;
  }
  @media (max-width: 390px) {
    display: none;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid rgba(0, 0, 0, 0.1);
  border-right: 4px solid rgba(0, 0, 0, 0.1);
  border-bottom: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #000;
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CenteredSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #27355a;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background-color: #27355a;
    box-shadow: 0 6px 20px rgba(0, 86, 179, 0.5);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
