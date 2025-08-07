import type { ErrorInfo, ReactNode } from "react";
import { Error } from './Components'
import { Component } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  }

  render() {
    if (this.state.hasError) {
      return <Error message="¡Ha ocurrido un error en la aplicacion!"/>
    }

    return this.props.children
  }
}

export default ErrorBoundary;