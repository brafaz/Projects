import { useState } from "react";

import { taskprops } from "../utils/interfaces";

function Task({ task, setChecked, remove }: taskprops) {
  const [check, setCheck] = useState<boolean>(task.active);
  const checked = () => {
    setCheck((pre) => {
      return !pre;
    });
    setChecked(task.id, !check);
  };

  return (
    <li
      key={task.id}
      className={`todo__todo ${check ? "" : "todo__todo-noactive"}`}
    >
      <input
        type="checkbox"
        name="active"
        id="active-check"
        checked={!check}
        onChange={checked}
      />
      <p className="task__text">{task.text}</p>
      <button className="btn btn-delete" onClick={() => remove(task.id)}>
        Удалить
      </button>
    </li>
  );
}

export default Task;
