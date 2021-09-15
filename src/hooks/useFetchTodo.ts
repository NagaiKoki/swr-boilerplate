import { useRouter } from "next/router";

import { useFetch } from "./useFetch";
import { requestFetchTodo } from "../apis/requestFetchTodo";
import { ResponseTodoType } from "../domains/todo";
import { useCallback } from "react";

const initialData: ResponseTodoType = {
  id: 0,
  userId: 0,
  title: "",
  completed: false,
};

interface IResponse {
  data: ResponseTodoType | undefined;
  onChangeTitle: (value: string) => void;
}

export const useFetchTodo = (): IResponse => {
  const { todo_id } = useRouter().query;
  const id = Number(todo_id);

  const { data, mutate } = useFetch<ResponseTodoType>({
    key: `/todos/${id}`,
    fetcher: todo_id ? () => requestFetchTodo(id) : null,
  });

  const handleOnChangeTitle = useCallback((value: string) => {
    mutate((data = initialData) => {
      return { ...data, title: value };
    }, false);
  }, []);

  return {
    data,
    onChangeTitle: handleOnChangeTitle,
  } as const;
};
