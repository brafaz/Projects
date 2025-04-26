import React, { useState } from "react";
import "./styles/Addinput.css";
import { addprops } from "../utils/interfaces";
const Addinput = React.memo(function Addinput({ addTask }: addprops) {
  const [addname, setaddName] = useState<string>("");
  const sendAdd = () => {
    if (addname.trim() !== "") {
      addTask(addname.trim());
    }
    setaddName("");
  };
  return (
    <div className="add">
      <input
        className="add__input"
        type="text"
        placeholder="Название задачи"
        onChange={(e) => {
          setaddName(e.target.value);
        }}
        value={addname}
      />
      <button className="btn add__button" onClick={sendAdd}>
        Добавить
      </button>
    </div>
  );
});

export default Addinput;
