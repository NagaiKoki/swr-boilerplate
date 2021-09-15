import { VFC } from "react";

type Props = {
  title: string;
  onChangeTitle: (value: string) => void;
  onRequestPatchTodo: ({ title }: { title: string }) => void;
};

export const TodoEditForm: VFC<Props> = ({
  title,
  onChangeTitle,
  onRequestPatchTodo,
}) => {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div style={{ marginBottom: "10px " }}>
        <label>タイトル</label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <input value={title} onChange={(e) => onChangeTitle(e.target.value)} />
      </div>
      <button type="submit" onClick={() => onRequestPatchTodo({ title })}>
        送信
      </button>
    </div>
  );
};
