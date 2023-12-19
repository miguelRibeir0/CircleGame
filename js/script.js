const body = document.querySelector("body");
const box = document.querySelector(".circles")
const circles = document.querySelectorAll(".circle");
const timerContainer = document.querySelector(".timer");
const startButton = document.querySelector(".gameStart");
const playContainer = document.querySelector(".play");

let score = 0;
let timer = 0;



function NextBtn() { //next level btn
    const next = document.createElement("button");
    next.classList.add("gameStart");
    next.innerText = "next level";
    return next;
}

let nextLevel = NextBtn();
let nextLevel2 = NextBtn();
let nextLevel3 = NextBtn();



function PlayButton() {  //play btn
    const play = document.createElement("button");
    play.classList.add("gameStart");
    play.innerText = "play"
    return play;
  }

let play = document.createElement("button"); //repeating the function because i need to append this btn
play.classList.add("gameStart");
play.innerText = "play"
playContainer.appendChild(play);

let play2 = PlayButton();
let play3 = PlayButton();
let play4 = PlayButton();


function RestartButton() {   //restart btn
    const restart = document.createElement("button");
    restart.classList.add("gameStart");
    restart.innerText = "restart";
    return restart;
  }

const restart = RestartButton();
const restart2 = RestartButton();
const restart3 = RestartButton();
const restart4 = RestartButton();


const playBtn = [play,play2,play3,play4];
const restartBtn = [restart,restart2,restart3,restart4];
const nextLevelBtn = [nextLevel,nextLevel2,nextLevel3];


circles.forEach(circle => {   //core mechanic
    circle.style.pointerEvents = "none";
    circle.addEventListener("click", () => {
        circle.classList.add("invisible");
        if (circle.classList.contains("invisible")) {
            circle.style.pointerEvents = "none";
        }
        score ++;
        console.log(score);
        if(score == 12) {
            clearInterval(timer);
            console.log("you won");
            for (let i = 0; i < 4; i++) {
                if(playContainer.contains(playBtn[i])) {                          // this is replacing the btns on multiple lvls, with i representing the lvl
                    playContainer.replaceChild(nextLevelBtn[i], playBtn[i]);      
                } else if (playContainer.contains(restartBtn[i])) {
                    playContainer.replaceChild(nextLevelBtn[i], restartBtn[i]);
                } else if(playContainer.contains(playBtn[3])) {
                    alert("You have beaten the game, congrats :)");               //since its the last level its not replacing the btns but displaying a message
                } else if (playContainer.contains(restartBtn[3])) {
                    alert("You have beaten the game, congrats :)");
                }
            }
            
            nextLevel.addEventListener("click", event => {   //level ascension
                lvl2Background();
            })
            nextLevel2.addEventListener("click", event => {
                lvl3Background();
            })
            nextLevel3.addEventListener("click", event => {
                lvl4Background();
            })
        }
    })
});

play.addEventListener("click", () => { //game start
    play.classList.add("invisible");
    lvl1(8);
});


function lvl1(time) {
    score = 0;
    circles.forEach(circle => circle.classList.remove("invisible"));
    circles.forEach(circle => circle.style.pointerEvents = "all");
    timerContainer.innerHTML = "";
    
    for (let i = 0; i < time; i++) {
        let bar = document.createElement("div");
        bar.style.width = `calc(${100/time}% - 10px)`;
        timerContainer.appendChild(bar);
    }
    timer = setInterval(() => {
        timerContainer.children[0].remove();
        
        if(timerContainer.children.length == 0) {
            clearInterval(timer)
            console.log("you lost");
            circles.forEach(circle => circle.style.pointerEvents = "none");
            if(playContainer.contains(play)) {
                playContainer.removeChild(play);
            }
            if(!playContainer.contains(restart)) {
                playContainer.appendChild(restart);
            }
            restart.classList.remove("invisible");
        } 
    }, 800);

}

restart.addEventListener("click", () => {  //restart mechanic
    restart.classList.add("invisible");
    lvl1(8);
});



function lvl2Background () {
    body.style.backgroundColor = "green";
    circles.forEach(circle => circle.classList.remove("invisible"));
    timerContainer.innerHTML = "";
    circles.forEach(circle => circle.style.pointerEvents = "none");

    playContainer.replaceChild(play2, nextLevel);
}

play2.addEventListener("click", () => { //game start
    play2.classList.add("invisible");
    lvl2(7);
    circles.forEach(circle => circle.style.pointerEvents = "all");
});

function lvl2 (time) { //lv 2
    circles.forEach(circle => circle.classList.remove("invisible"));
    circles.forEach(circle => circle.style.pointerEvents = "all");
    timerContainer.innerHTML = "";
    score = 0;
    for (let i = 0; i < time; i++) {
        let bar = document.createElement("div");
        bar.style.width = `calc(${100/time}% - 10px)`;
        timerContainer.appendChild(bar);
    }
    timer = setInterval(() => {
        timerContainer.children[0].remove();
        
        if(timerContainer.children.length == 0) {
            clearInterval(timer)
            console.log("you lost");
            circles.forEach(circle => circle.style.pointerEvents = "none");
            if(playContainer.contains(play2)) {
                playContainer.removeChild(play2);
            }
            if(!playContainer.contains(restart2)) {
                playContainer.appendChild(restart2);
            }
            restart2.classList.remove("invisible");
        } 
    }, 700);
}

restart2.addEventListener("click", () => {
    restart2.classList.add("invisible");
    lvl2(7);
});


function lvl3Background () {
    body.style.backgroundColor = "purple";
    circles.forEach(circle => circle.classList.remove("invisible"));
    timerContainer.innerHTML = "";
    circles.forEach(circle => circle.style.pointerEvents = "none");
    playContainer.replaceChild(play3, nextLevel2);
}
play3.addEventListener("click", () => { //game start
    play3.classList.add("invisible");
    lvl3(6);
    circles.forEach(circle => circle.style.pointerEvents = "all");
});

function lvl3 (time) {
    circles.forEach(circle => circle.classList.remove("invisible"));
    circles.forEach(circle => circle.style.pointerEvents = "all");
    timerContainer.innerHTML = "";
    score = 0;
    for (let i = 0; i < time; i++) {
        let bar = document.createElement("div");
        bar.style.width = `calc(${100/time}% - 10px)`;
        timerContainer.appendChild(bar);
    }
    timer = setInterval(() => {
        timerContainer.children[0].remove();
        
        if(timerContainer.children.length == 0) {
            clearInterval(timer)
            console.log("you lost");
            circles.forEach(circle => circle.style.pointerEvents = "none");
            if(playContainer.contains(play3)) {
                playContainer.removeChild(play3);
            }
            if(!playContainer.contains(restart3)) {
                playContainer.appendChild(restart3);
            }
            restart3.classList.remove("invisible");
        } 
    }, 600);
}

restart3.addEventListener("click", () => {
    restart3.classList.add("invisible");
    lvl3(6);
});

function lvl4Background () {
    body.style.backgroundColor = "red";
    circles.forEach(circle => circle.classList.remove("invisible"));
    timerContainer.innerHTML = "";
    circles.forEach(circle => circle.style.pointerEvents = "none");

    playContainer.replaceChild(play4, nextLevel3);
}

play4.addEventListener("click", () => { //game start
    play4.classList.add("invisible");
    lvl4(5);
    circles.forEach(circle => circle.style.pointerEvents = "all");
});

function lvl4 (time) {
    circles.forEach(circle => circle.classList.remove("invisible"));
    circles.forEach(circle => circle.style.pointerEvents = "all");
    timerContainer.innerHTML = "";
    score = 0;
    for (let i = 0; i < time; i++) {
        let bar = document.createElement("div");
        bar.style.width = `calc(${100/time}% - 10px)`;
        timerContainer.appendChild(bar);
    }
    timer = setInterval(() => {
        timerContainer.children[0].remove();
        
        if(timerContainer.children.length == 0) {
            clearInterval(timer)
            console.log("you lost");
            circles.forEach(circle => circle.style.pointerEvents = "none");
            if(playContainer.contains(play4)) {
                playContainer.removeChild(play4);
            }
            if(!playContainer.contains(restart4)) {
                playContainer.appendChild(restart4);
            }
            restart4.classList.remove("invisible");
        } 
    }, 550);
}

restart4.addEventListener("click", () => {
    restart4.classList.add("invisible");
    lvl4(5);
});
