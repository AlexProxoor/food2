import React, { Component, ErrorInfo } from "react";
import {
  NotFoundContainer,
  ErrorCode,
  ErrorMessage,
  SubMessage,
  HomeButton,
} from "./styled";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <NotFoundContainer>
          <ErrorCode>404</ErrorCode>
          <ErrorMessage>Oops! Page Not Found</ErrorMessage>
          <SubMessage>
            This page doesn't exist or was removed! We suggest you go back to
            the homepage.
          </SubMessage>
          <HomeButton onClick={() => (window.location.href = "/")}>
            Back to homepage
          </HomeButton>
        </NotFoundContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
