let   userScore          = 0,
      computerScore      = 0;
const userScore_span     = document.querySelector("#user-score"),
      computerScore_span = document.querySelector("#computer-score"),
      scoreBoard_div     = document.querySelector(".score-board"),
      result_p           = document.querySelector(".result1"),
      rock_div           = document.getElementById("r"),
      paper_div          = document.getElementById("p"),
      scissors_div       = document.getElementById("s");
    //function get computer choice
function getComputerChoice(){
    const choices = ["r","p","s"]
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter === "r") return "piedra";
    if(letter === "p") return "papel";
    return "tijeras";
}
//function win loose draw
function win(user,computer){
    //When win ++ user Score
    userScore++;
    userScore_span.innerHTML = (userScore);
    const userSmallFontSize = "User".fontsize(3).sup();
    const compSmallFontSize = "Comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(user) + userSmallFontSize + " gana a " +  convertToWord(computer)+compSmallFontSize + " Has Ganado  🙂!";
}
function loose(user,computer){
    //When win ++ user Score
    computerScore++;
    computerScore_span.innerHTML = (computerScore);
    const userSmallFontSize = "User".fontsize(3).sup();
    const compSmallFontSize = "Comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(user)+userSmallFontSize + " pierde contra " + convertToWord(computer)+compSmallFontSize  + " Has Perdido  😔 "
};
function draw(user,computer){
    const userSmallFontSize = "User".fontsize(3).sup();
    const compSmallFontSize = "Comp".fontsize(3).sup();
    result_p.innerHTML =   convertToWord(user)+userSmallFontSize  + " empata a " + convertToWord(computer)+compSmallFontSize +  "  😳"

}
      //function game
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        break;
        case "rp":
        case "sr":
        case "ps":
        loose(userChoice,computerChoice);
        break;
        case "rr":
        case "ss":
        case "pp":
        draw(userChoice,computerChoice);
    }
}
//add event listeners
main();
 function main(){
    rock_div.addEventListener("click",()=>{
        game("r")
    });
    paper_div.addEventListener("click",()=>{
        game("p")
    });
    scissors_div.addEventListener("click",()=>{
        game("s")
    });
 }
