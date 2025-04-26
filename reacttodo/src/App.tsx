import { useEffect, useState } from "react";
import "./App.css";
import Addinput from "./components/Addinput";
import { task } from "./utils/interfaces";
import Task from "./components/Task";
import { saveList, getLocalList } from "./utils/utils";

function App() {
  const [list, setList] = useState<any[]>(getLocalList());
  const [filter, setFilter] = useState<string>("all");
  const [filteredList, setFilteredList] = useState<any[]>(list);

  function add(name: string) {
    let addtask: task = {
      text: name,
      id: Math.random().toString(16).slice(2),
      active: true,
    };
    setList((prev) => {
      let newList = [...prev, addtask];
      saveList(newList);
      return newList;
    });
    if (filter === "all") {
      setFilteredList((prev) => [...prev, addtask]);
    }
  }

  function setCheck(id: string, check: boolean) {
    setList((prev) => {
      let newList = prev.map((task: task) =>
        task.id === id ? { ...task, active: check } : task
      );
      saveList(newList);
      return newList;
    });
  }

  function remove(id: string) {
    setList((prev) => {
      let newList = prev.filter((task: task) => task.id !== id);
      saveList(newList);
      return newList;
    });
    if (filter === "all") {
      setFilteredList((prev) => prev.filter((task: task) => task.id !== id));
    }
  }

  useEffect(() => {
    if (filter === "active") {
      setFilteredList(list.filter((task: task) => task.active === true));
    } else if (filter === "noactive") {
      setFilteredList(list.filter((task: task) => task.active === false));
    } else if (filter === "all") {
      setFilteredList(list);
    }
  }, [filter, list]);

  return (
    <div className="App">
      <Addinput addTask={add} />
      <div className="filter">
        <select
          className="filter__select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="active">В процессе</option>
          <option value="noactive">Выполненые</option>
        </select>
      </div>
      <ul className="todo__list">
        {filteredList.map((task: task) => {
          return (
            <Task
              key={task.id}
              task={task}
              setChecked={setCheck}
              remove={remove}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
