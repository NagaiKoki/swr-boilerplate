import { ResponseTodoType } from "../domains/todo";

export const requestFetchTodo = async (
  id: number
): Promise<ResponseTodoType> => {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const res = await fetch(url);
  return res.json();
};
