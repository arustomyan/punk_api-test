import { useState } from "react";

export const useFetching = (callback, setIsLoading) => {
  const [error, setError] = useState("");
  // тогда уж сюда загрузку засунь и возвращай isLoading
  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  //вроде возвращаешь кортеж значений, а ошибку не используешь нигде
  return [fetching, error];
};
