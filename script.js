// scoreArr ne va ajuta sa tinem scorul pentu user si pc 
var scoreArr = [0, 0];
//1 avem nevoie de o functie care sa ne afiseze variantele pentru user //
function displayGame() {
  var gameplay = document.querySelector(".gamePlay");
  gameplay.style.display = 'block'
}
//2 avem nevoie de o alegere penru computer (random) //

var choice = ["rock", "paper", "scissors"];
var indexChoice = Math.floor(Math.random() * 3);
var pcChoice = choice[indexChoice];


//3 avem nevoie de alegerea Userului si comparatia cu Pc:
function addEventForUser(type) {

  
  var btn = document.getElementById("btn-" + type);
  btn.addEventListener("click", function () {
    indexChoice = Math.floor(Math.random() * 3);
    pcChoice = choice[indexChoice];

    //5 in functie de rezulatul jocului se schimba backroundul paragrafului in care se afiseaza rezultatul. 
    document.getElementById('target').innerHTML = Result1v1(pcChoice, type);
    if (Result1v1(pcChoice, type) == "WIN WIN") {
      document.getElementById('target').style.backgroundColor = 'yellow';

    } else if (Result1v1(pcChoice, type) == "PC wins") {
      document.getElementById('target').style.background = 'red';
    } else {
      document.getElementById('target').style.background = 'chartreuse';
    }
    //.6 if condition pentru afisat scorul 
    if (Result1v1(pcChoice, type) == "PC wins" && scoreArr[0] < 10) {

      scoreArr[0]++;
      document.getElementById('pcScore').innerHTML = "Pc Score:" + scoreArr[0];
      return scoreArr[0];

    } else if (Result1v1(pcChoice, type) == "User WINS" & scoreArr[1] < 10) {
      scoreArr[1]++;
      document.getElementById('userScore').innerHTML = "User Score:" + scoreArr[1];
      return scoreArr[1];

    }
    // 7 if condition care ne va ascunde variantele pentru user cand ajunge scorul la 10 si va face refresh la pagina// 

    if (scoreArr[0] == 10) {
      location.reload();
    } else if (scoreArr[1] == 10) {
      location.reload();
    }





  });
}
pcChoice = choice[indexChoice];
addEventForUser("rock");
addEventForUser("paper");
addEventForUser("scissors");

// 4. trebuie comparate alegerile dintr user si pc si afisat castigatorul. 



function Result1v1(userChoice, pcChoice) {

  if (userChoice == "rock" && pcChoice == "paper") {
    return "PC wins";

  } else if (userChoice == "paper" && pcChoice == "paper") {
    return "WIN WIN";
  } else if (userChoice == "scissors" && pcChoice == "paper") {
    return "User WINS";

  } else if (userChoice == "rock" && pcChoice == "rock") {
    return "WIN WIN";
  } else if (userChoice == "paper" && pcChoice == "rock") {
    return "User WINS";

  } else if (userChoice == "scissors" && pcChoice == "rock") {
    return "PC wins";

  } else if (userChoice == "rock" && pcChoice == "scissors") {
    return "User WINS";

  } else if (userChoice == "paper" && pcChoice == "scissors") {
    return "PC wins";

  } else if (userChoice == "scissors" && pcChoice == "scissors") {
    return "WIN WIN";
  }


}

