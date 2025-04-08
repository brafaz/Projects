const poles = document.querySelectorAll(".grid__pole");

let queue = 1;

let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function setWin(num) {
  let que = 0;
  num == 3 ? (que = 1) : num == 6 ? (que = 2) : (que = 0);
  if (que != 0) {
    setTimeout(() => {
      que == 1 ? alert("Победили крестики") : alert("Победили нолики");
      grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      poles.forEach((el) => {
        el.classList.value.split(" ").includes("cross")
          ? el.classList.remove("cross")
          : el.classList.remove("circl");
      });
    }, 100);
    return true;
  }
}

function gridcalc() {
  let resultx = false;
  let start = 0;
  let end = 3;
  let FrowYX = [];
  let FrowXY = [];
  for (let i = 0; i < 3; i++) {
    let row = grid.slice(start, end);
    let Frow = row.filter((el) => {
      return el == 1 || el == 2;
    });
    FrowYX.push(row[i]);
    FrowXY.push(row[2 - i]);
    if (Frow.length > 2) {
      let redRow = Frow.reduce((a, b) => {
        return a + b;
      });
      setWin(redRow) ? (resultx = true) : false;
    }

    start = end;
    end += 3;
  }

  if (resultx == false) {
    let resultxy = false;
    let YX = FrowYX.filter((el) => {
      return el == 1 || el == 2;
    });
    let XY = FrowXY.filter((el) => {
      return el == 1 || el == 2;
    });
    if (YX.length > 2) {
      let redRow = YX.reduce((a, b) => {
        return a + b;
      });
      setWin(redRow) ? (resultxy = true) : false;
    }
    if (XY.length > 2) {
      let redRow = XY.reduce((a, b) => {
        return a + b;
      });
      setWin(redRow) ? (resultxy = true) : false;
    }
    if (resultxy == false) {
      let row1 = grid.slice(0, 3);
      let row2 = grid.slice(3, 6);
      let row3 = grid.slice(6, 9);
      for (let i = 0; i < 3; i++) {
        let row = [row1[i], row2[i], row3[i]];
        let Frow = row.filter((el) => {
          return el == 1 || el == 2;
        });
        if (Frow.length > 2) {
          let redRow = Frow.reduce((a, b) => {
            return a + b;
          });

          setWin(redRow);
        }
      }
    }
  }
}

poles.forEach((el, i) => {
  el.addEventListener("click", () => {
    if (queue == 1) {
      if (
        el.classList.value.split(" ").includes("cross") ||
        el.classList.value.split(" ").includes("circl")
      ) {
        return;
      }
      el.classList.add("cross");
      queue = 2;
      grid[i] = 1;
    } else if (queue == 2) {
      if (
        el.classList.value.split(" ").includes("cross") ||
        el.classList.value.split(" ").includes("circl")
      ) {
        return;
      }
      el.classList.add("circl");
      queue = 1;
      grid[i] = 2;
    }
    gridcalc();
  });
});
