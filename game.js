let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".container");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#score_user");
const compScorePara = document.querySelector("#score_comp");


const drawGame = () =>{
    msg.innerText = "Game is draw.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , compChoise , choiceId) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${choiceId} beats ${compChoise}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose! ${compChoise} beats Your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
} 
const genCompChoice = () =>{
    let options = ["rock","paper","scissor"];
    const chIdx = Math.floor(Math.random()*3);//floor round up the number
    return options[chIdx];
}
const playGame = (choiceId) =>{
    console.log("User choice = ",choiceId);
    let compChoise = genCompChoice();
    console.log("Computer choice = ",compChoise);

    if(choiceId === compChoise){
        drawGame();
    }
    else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compChoise === "paper" ? false : true;
        }
        else if( choiceId === "paper"){
            userWin = compChoise === "scissor" ? false : true;
        }
        else{
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin , compChoise , choiceId);
    }
}
choices.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        let choiceId = choise.getAttribute("id");
        playGame(choiceId);
    });
});