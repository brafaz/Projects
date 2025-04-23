import React, { useRef } from "react";
//import "./styles/Addinput.css";
import { task } from "../utils/interfaces";
function Task({ task }: any) {
  return (
    <li
      key={task.id}
      className={`todo__todo todo-id-${task.id} ${
        !task.active ? "" : "todo__todo-noactive"
      }`}
    >
      <input
        type="checkbox"
        name="active"
        id="active-check"
        // checked={task.active ? true : false}
        defaultChecked={true}
      />
      <p className="task__text">{task.text}</p>
      <button className="btn ">Удалить</button>
    </li>
  );
}

export default Task;
