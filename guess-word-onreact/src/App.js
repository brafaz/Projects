import { useEffect, useRef, useState } from "react";
import "./App.css";
import Inputed from "./components/inputed";

function App() {
  const [gWords, setGwords] = useState([
    "столб",
    "право",
    "товар",
    "порты",
    "столы",
    "тумба",
    "домик",

    "ВИЛКА",
    "ОТДЫХ",
    "РЫБАК",
    "КАЗАН",
    "МИСКА",
    "ШТУКА",
    "ДРАЖЕ",

    "афера",
    "самбо",
    "чешуя",
    "слово",
    "место",
  ]);
  const limitrow = useRef(5);
  const [rowi, setRowi] = useState(0);
  const [getrowt, setrowt] = useState([]);
  const getrowtexts = useRef([]);
  const gessW = useRef("");
  const [rows, setrows] = useState([]);
  function updateRow() {
    const getrow = document.querySelectorAll(".grid__row");

    const actrow = getrow[rowi + 1];
    if (rowi + 1 >= limitrow.current) {
      alert("Игра окончена");
      setrows([]);
      return;
    }
    setRowi((r) => (r += 1));

    actrow.classList.add("active-row");
    const activerowblocks = actrow.querySelectorAll(".grid__block");
    let texts = [];
    activerowblocks.forEach((item, i) => {
      texts.push(item.querySelector(".grid__block-text"));
    });
    getrowtexts.current = texts;
    setrowt(activerowblocks);
  }
  useEffect(() => {
    const getrow = document.querySelectorAll(".grid__row");
    if (getrow.length > 0) {
      gessW.current = gWords[Math.floor(Math.random() * gWords.length) + 0];
      console.log(gessW);
      const actrow = getrow[rowi];
      actrow.classList.add("active-row");
      const activerowblocks = actrow.querySelectorAll(".grid__block");

      let texts = [];
      activerowblocks.forEach((item, i) => {
        texts.push(item.querySelector(".grid__block-text"));
      });
      getrowtexts.current = texts;

      setrowt(activerowblocks);
    }
  }, [rows]);

  useEffect(() => {
    let rws = [];
    for (let index = 0; index < limitrow.current; index++) {
      rws.push(
        <div key={Math.random() * 24} className="grid__row">
          <div className="grid__block">
            <span className="grid__block-text"></span>
          </div>
          <div className="grid__block">
            <span className="grid__block-text"></span>
          </div>
          <div className="grid__block">
            <span className="grid__block-text"></span>
          </div>
          <div className="grid__block">
            <span className="grid__block-text"></span>
          </div>
          <div className="grid__block">
            <span className="grid__block-text"></span>
          </div>
        </div>
      );
    }
    setrows(rws);
  }, []);
  //console.log("render app");
  function checkword(w, cb) {
    let gesslower = gessW.current.toLowerCase();
    let wordlower = w.toLowerCase();
    if (gesslower == wordlower) {
      alert("Победа");
      wordlower.split("").forEach((item, index) => {
        if (item == gesslower[index]) {
          getrowtexts.current[index].style.color = "green";
          return;
        }
      });
    } else {
      alert("Проигрыш");
      wordlower.split("").forEach((item, index) => {
        if (item == gesslower[index]) {
          getrowtexts.current[index].style.color = "green";
          return;
        } else if (
          gesslower.split("").indexOf(item) != -1 &&
          gesslower[gesslower.split("").indexOf(item)] !=
            wordlower[gesslower.split("").indexOf(item)]
        ) {
          getrowtexts.current[index].style.color = "orange";
        } else {
          getrowtexts.current[index].style.color = "red";
        }
      });
      updateRow();

      cb();
    }
  }

  return (
    <div className="App">
      <Inputed props={{ getrowt: getrowt }} checkword={checkword} />

      <div className="grid">{rows}</div>
    </div>
  );
}

export default App;
