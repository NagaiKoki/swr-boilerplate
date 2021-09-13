interface RequestType {
  id: number;
  title: string;
}

export const requestPatchTodo = async ({ id, title }: RequestType) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify({ title }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res;
};
