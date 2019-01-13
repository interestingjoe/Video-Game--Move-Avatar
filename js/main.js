let btnRespawn = document.getElementsByClassName("respawn")[0];
let btnMoveLeft = document.getElementsByClassName("move-left")[0];
let btnMoveRight = document.getElementsByClassName("move-right")[0];
let btnMoveUp = document.getElementsByClassName("move-up")[0];
let btnMoveDown = document.getElementsByClassName("move-down")[0];
let avatar = document.getElementsByClassName("avatar")[0];

let xAxis = 30;
let yAxis = 30;
let isMovable = true;
let isCollision = false;
const stepsReset = 30;
const numOfSteps = 30;


let check = {
    movingProcess: (steps, axis) => {
        if(check.getGameState() === true) {
            if(check.getCollision(steps, axis) === false) {
                axis(steps);
                error.resetMessage();
            } else {
                error.collision();
            }
        } else {
            error.notMovable();
        }
    },
    getGameState: () => {
        return isMovable;
    },
    setGameState: (n) => {
        isMovable = n;
    },
    getCollision: (checkSteps, checkAxis) => {
        newAxis = checkAxis === move.setXAxis ? xAxis : yAxis;
        let newSteps = newAxis + checkSteps;
        isCollision = newSteps < 0 ? true : false;
        return isCollision;
    },
    setCollision: (e) => {
        isCollision = e;
    }
}
let move = {
    respawn: (n) => {
        render.setXAxis(xAxis = n);
        render.setYAxis(yAxis = n);
        error.resetMessage();
    },
    setXAxis: (n) => {
        render.setXAxis(xAxis += n);
    },
    setYAxis: (n) => {
        render.setYAxis(yAxis += n);
    }
}
let render = {
    setXAxis: (n) => {
        avatar.style.left = n + "px";
    },
    setYAxis: (n) => {
        avatar.style.top = n + "px";
    }
}
let error = {
    setMessage: (e) => {
        document.getElementsByClassName("message")[0].innerHTML = e;
    },
    resetMessage: () => {
        error.setMessage("");
    },
    collision: () => {
        error.setMessage("You can not move that way.");
    },
    notMovable: () => {
        error.setMessage("You can not move.");
    }
}


btnRespawn.addEventListener("click", () => {
    move.respawn(stepsReset);
});
btnMoveLeft.addEventListener("click", () => {
    check.movingProcess(-numOfSteps, move.setXAxis);
});
btnMoveRight.addEventListener("click", () => {
    check.movingProcess(numOfSteps, move.setXAxis);
});
btnMoveUp.addEventListener("click", () => {
    check.movingProcess(-numOfSteps, move.setYAxis);
});
btnMoveDown.addEventListener("click", () => {
    check.movingProcess(numOfSteps, move.setYAxis);
});
