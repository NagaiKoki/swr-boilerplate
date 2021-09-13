import { useState, useEffect } from "react";

import { ResponseTodoType } from "../domains/todo";
import { requestPatchTodo } from "../apis/requestPatchTodo";

type RequestType = Pick<ResponseTodoType, "title" | "id">;

export const useRequestPatchTodo = () => {
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestTargets, setRequestTargets] = useState<RequestType>({
    id: 0,
    title: "",
  });

  const handleOnRequest = async () => {
    const res = await requestPatchTodo(requestTargets);

    if (res) {
      alert("success!");
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
