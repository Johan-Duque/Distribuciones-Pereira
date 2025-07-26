import ErrorBoundary from "./ErrorBoundary";
import { AppRouter } from "./AppRouter";

function AppHookContainer() {
  return (
    <ErrorBoundary>
      <AppRouter/>
    </ErrorBoundary>
  );
}

export { AppHookContainer };
