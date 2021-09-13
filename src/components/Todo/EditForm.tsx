import { VFC } from "react";

type Props = {
  title: string;
  onChangeTitle: (value: string) => void;
  onRequestPatchTodo: ({ id, title }: { id: number; title: string }) => void;
};

export const TodoEditForm: VFC<Props> = ({
  title,
  onChangeTitle,
  onRequestPatchTodo,
}) => {
  return (
    <div style={{ padding: "40px" }}>
      <label>タイトル</label>
      <input value={title} onChange={(e) => onChangeTitle(e.target.value)} />
      <button
        type="submit"
        onClick={() => onRequestPatchTodo({ title, id: 1 })}
      >
        送信
      </button>
    </div>
  );
};
