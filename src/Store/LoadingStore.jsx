import { createContext, useState } from "react";

export const Context = createContext();

const LoadingStore = ({ children }) => {
  const [loading, setLoaing] = useState(false);

  const handleStartLoading = () => {
    setLoaing(true);
  };

  const handleStopLoading = () => {
    setLoaing(false);
  };

  const value = {
    loading,
    handleStartLoading,
    handleStopLoading,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default LoadingStore;
