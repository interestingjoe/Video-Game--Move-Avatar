let btnRespawn = document.getElementsByClassName("respawn")[0];
let btnMoveLeft = document.getElementsByClassName("move-left")[0];
let btnMoveRight = document.getElementsByClassName("move-right")[0];
let btnMoveUp = document.getElementsByClassName("move-up")[0];
let btnMoveDown = document.getElementsByClassName("move-down")[0];
let avatar = document.getElementsByClassName("avatar")[0];

let xAxis = 0;
let yAxis = 0;
const numOfSteps = 30;

const move = {
    respawn: () => {
        console.log("Respawn");
    },
    left: (n) => {
        display.applyXAxis(xAxis -= n);
        console.log(xAxis);
    },
    right: (n) => {
        display.applyXAxis(xAxis += n);
        console.log(xAxis);
    },
    up: (n) => {
        display.applyYAxis(yAxis -= n);
        console.log(yAxis);
    },
    down: (n) => {
        display.applyYAxis(yAxis += n);
        console.log(yAxis);
    }
}
const display = {
    applyXAxis: (n) => {
        avatar.style.left = n + "px";
    },
    applyYAxis: (n) => {
        avatar.style.top = n + "px";
    }
}


btnRespawn.addEventListener("click", () => {
    move.respawn(0);
});
btnMoveLeft.addEventListener("click", () => {
    move.left(numOfSteps);
});
btnMoveRight.addEventListener("click", () => {
    move.right(numOfSteps);
});
btnMoveUp.addEventListener("click", () => {
    move.up(numOfSteps);
});
btnMoveDown.addEventListener("click", () => {
    move.down(numOfSteps);
});
