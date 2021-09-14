import { useCallback } from "react";
import { useFetch } from "./useFetch";

const initialData = {
  title: "",
};

export const usePostTodo = () => {
  const { data, mutate } = useFetch<{ title: string }>({
    key: "/todos/new",
    fetcher: null,
  });

  const handleOnChangeTitle = useCallback((value: string) => {
    mutate((data = initialData) => {
      return { ...data, title: value };
    });
  }, []);

  return {
    data,
    onChangeTitle: handleOnChangeTitle,
  };
};
