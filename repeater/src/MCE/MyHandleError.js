import React from "react";

export const useErrorHandlerData = () => {
  const [error, setError] = React.useState(null);
  const handleError = React.useCallback((error) => {
    setError(error);
  }, []);
  return { error, handleError };
};
