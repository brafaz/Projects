import React from "react";
import { useEffect, useRef, useState } from "react";
function Inputed({ props, checkword }) {
  let { getrowt } = props;
  const [word, setWord] = useState("");
  const row = useRef([]);
  //console.log("render input");
  useEffect(() => {
    row.current.focus();
    document.addEventListener("keydown", (e) => {
      row.current.focus();
    });
  }, []);

  useEffect(() => {
    getrowt.forEach((el, i) => {
      let text = el.querySelector(".grid__block-text");
      let letter = word.split("")[i];
      letter != undefined ? (text.innerHTML = letter) : (text.innerHTML = "");
    });
  }, [word]);
  function clearWord() {
    setWord("");
  }
  const keyDown = (event) => {
    let key = event.key;
    if (key == "Backspace") {
      let t = word.split("");
      let p = t.pop();
      setWord(t.join(""));
      return;
    }
    if (word.length == 5) {
      if (key == "Enter") {
        checkword(word, clearWord);

        return;
      }
    }

    if (key.length <= 1 && key != " " && !+key && word.length <= 4) {
      setWord((w) => w + event.key);
    }
  };
  return (
    <>
      <input className="hide-input" type="text" onKeyDown={keyDown} ref={row} />
    </>
  );
}

export default Inputed;
