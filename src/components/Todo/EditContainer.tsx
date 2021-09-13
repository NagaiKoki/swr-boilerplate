import { VFC } from "react";
import { useFetchTodo } from "../../hooks/useFetchTodo";
import { useRequestPatchTodo } from "../../hooks/usePatchTodo";
import { TodoEditForm } from "./EditForm";

export const TodoEditContainer: VFC = () => {
  const { data, onChangeTitle } = useFetchTodo();
  const { onRequestPatchTodo } = useRequestPatchTodo();

  if (!data) {
    return <p>loading...</p>;
  }

  return (
    <TodoEditForm
      title={data.title}
      onChangeTitle={onChangeTitle}
      onRequestPatchTodo={onRequestPatchTodo}
    />
  );
};
