import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

import { ResponseTodoType } from "../domains/todo";
import { requestPatchTodo } from "../apis/requestPatchTodo";

type RequestType = Pick<ResponseTodoType, "title">;

export const useRequestPatchTodo = () => {
  const { todo_id } = useRouter().query;
  const id = Number(todo_id);

  const [isRequesting, setIsRequesting] = useState(false);
  const [requestTargets, setRequestTargets] = useState<RequestType>({
    title: "",
  });

  const handleOnRequest = async () => {
    const res = await requestPatchTodo({ title: requestTargets.title, id });

    if (res) {
      alert("success!");
      mutate<ResponseTodoType>(`/todos/${id}`);
    } else {
      console.log("failure");
    }
  };

  const handleOnSubmit = (args: RequestType) => {
    setRequestTargets(args);
    setIsRequesting(true);
  };

  useEffect(() => {
    if (isRequesting) {
      handleOnRequest();
    }
  }, [isRequesting]);

  return {
    onRequestPatchTodo: handleOnSubmit,
  };
};
