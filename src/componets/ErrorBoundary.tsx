import React, {ErrorInfo, PureComponent} from 'react';

interface IErrorBoundaryProps {
    children: React.ReactNode | React.ReactNode[];
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends PureComponent<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) return <span>Oops, something went wrong</span>;

    return children;
  }
}

export default ErrorBoundary;
