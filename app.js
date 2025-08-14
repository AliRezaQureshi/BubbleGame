// Variables *****

let timer = 60;
let hitNum = 0;
let score = 0;


// Functions *****

// Function to create bubbles
function createBubbles() {
    let clutter = "";
    for (let i = 1; i <= 119; i++) {
        let rbubble = Math.floor(Math.random() * 20) + 1;
        clutter += `<div id="bubble">${rbubble}</div>`
    }
    document.querySelector(".pbottom").innerHTML = clutter;
    
}

// Function to start the timer
function startTimer() {
    let timeVal = document.querySelector(".timeVal");
    let timeInterval = setInterval(() => {
        if (timer > 0){
            timer--;
            timeVal.textContent = timer;
        }else{

            clearInterval(timeInterval);
            timeVal.textContent = "⌛️";
            document.querySelector(".pbottom").innerHTML = `<div class="sdis">
            <img class="gameOver" src="https://freepngimg.com/save/174681-logo-game-over-free-download-png-hd/632x153" alt="Game Over">
            
            <h1 class="scoreDisplay">Your Score: ${score}</h1>
            
            <button class="playAgain" onclick="location.reload()">Play Again</button> </div>`;

        }
    }, 1000)
}

//  Function to genrate Hit number
function genrateHitNUm() {
    hitNum = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".hitVal").textContent = hitNum;

}

// Function to increase score
function increaseScore() {
    score += 10;
    document.querySelector(".scoreBoard").textContent = score;
}

// Game Logic *****

document.querySelector(".pbottom").addEventListener("click", (e) => {
    let c = Number(e.target.textContent);
    if (c === hitNum) {
        increaseScore();
        createBubbles();
        genrateHitNUm();
        
        
    }
})



// Calling all the Functions *****
createBubbles();
startTimer();
genrateHitNUm();


// Footer *****

document.getElementById("year").textContent = new Date().getFullYear();