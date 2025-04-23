import React, { useState } from "react";
import "./App.css";
import Addinput from "./components/Addinput";
import Filterselect from "./components/Filterselect";
import { task } from "./utils/interfaces";
import Task from "./components/Task";

function App() {
  const [list, setList] = useState<any[]>([
    { text: "Изучить JS", id: "gfd4363226g", active: true },
    { text: "Изучить React", id: "gfd4gre6g", active: true },
    { text: "Изучить HTML", id: "gfdhjrjj3226g", active: false },
    { text: "Изучить CSS", id: "gfd4375643226g", active: true },
  ]);
  const [filter, setFilter] = useState<string>("all");
  const [filteredList, setFilteredList] = useState<any[]>(list);
  return (
    <div className="App">
      <Addinput />
      <Filterselect />
      <ul className="todo__list">
        {filteredList.map((task: task) => {
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
                defaultChecked={task.active}
              />
              <p className="task__text">{task.text}</p>
              <button className="btn ">Удалить</button>
            </li>
          ); //<Task task={task} />;
        })}
      </ul>
    </div>
  );
}

export default App;
