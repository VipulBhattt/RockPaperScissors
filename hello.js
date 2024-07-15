let userScore=0;
let comScore=0;
function getComChoice(){
    arr=["rock","paper","scissors"];
    let idx= Math.floor(Math.random()*3);
    let comChoice=arr[idx];
    return comChoice;
}
function ComWins(){
    comScore++;
    let message= document.querySelector(".message");
    message.innerText="You lost!";
    message.style.backgroundColor="Red";
    message.style.color="white";
    let comScoreOnScr= document.querySelector("#comscore");
    comScoreOnScr.innerText=comScore;
}
function UserWins(){
    userScore++;
    let message= document.querySelector(".message");
    message.innerText="You Won!";
    message.style.backgroundColor="Green";
    message.style.color="white";
    let UserScoreOnScr= document.querySelector("#userscore");
    UserScoreOnScr.innerText=userScore;
}
function playGame(userChoice){
    let comChoice=getComChoice();
    if (comChoice===userChoice){
        let message= document.querySelector(".message");
        message.innerText="Game Drawn Play Again!!";
        message.style.backgroundColor="blue";
    }
    else{
        if (userChoice==="rock"){
            if(comChoice==="paper"){
              ComWins(); 
            }
            else{
                UserWins();
            }
        }
        if (userChoice==="paper"){
            if(comChoice==="scissors"){
                ComWins();
            }
            else{
                UserWins();
            }
        }
        if (userChoice==="scissors"){
            if (comChoice==="rock"){
                ComWins();
            }
            else{
                UserWins();
            }
        }
    }
}
function getUserChoice(){
    let choices= document.querySelectorAll(".img");
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            console.log(userChoice);
            playGame(userChoice);
        })
    })

}
getUserChoice();

